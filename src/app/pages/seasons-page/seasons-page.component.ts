import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Champion } from '../../utils/types';
import { environment } from '../../../environments/environment';
import { StoreInterface } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import * as appActions from '../../store/app.actions';
import { selectChampions } from 'src/app/store/app.selector';

@Component({
  selector: 'app-seasons-page',
  templateUrl: './seasons-page.component.html',
  styleUrls: ['./seasons-page.component.scss']
})

export class SeasonsPageComponent implements OnInit, OnDestroy {
  public startYear = environment.START_YEAR;
  public endYear = environment.CURRENT_YEAR + 1;
  currentPage = 1;
  itemsPerPage = 7;
  totalRowLength: any;


  public columns = [
    {
      columnName: 'Season',
    },
    {
      columnName: 'Winner',
    },
    {
      columnName: 'Constructor',
    },
    {
      columnName: '',
    },
  ];
  private destroy$ = new Subject<void>();
  public rows$: Observable<Champion[]> | undefined;
  public totalPages: any;

  constructor(private store: Store<StoreInterface>) { }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.calculateViewRows();
    this.rows$ = this.store.pipe(select(selectChampions));
    this.totalRowLength = this.endYear - this.startYear;
    this.totalPages = Math.ceil(this.totalRowLength / this.itemsPerPage);
  }

  public toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.calculateViewRows(page);
  }

  public calculateViewRows(page: number = 1): void {
    const yearsPerPage = this.itemsPerPage;

    const startYearForPage = this.startYear + (page - 1) * yearsPerPage;
    const endYearForPage = startYearForPage + yearsPerPage - 1;

    this.store.dispatch(appActions.loadChampions({ startYear: startYearForPage, endYear: endYearForPage }));
  }

}
