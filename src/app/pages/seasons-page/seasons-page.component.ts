import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject, Subscription, debounce, distinctUntilChanged, take, takeLast, takeUntil, takeWhile } from 'rxjs';
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
  itemsPerPage = 6;
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
  public rows$: any;
  public rows: Champion[] = [];
  public totalPages:any;

  constructor(private store: Store<StoreInterface>) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.rows$ = this.store.pipe(select(selectChampions));
    this.totalRowLength = this.endYear - this.startYear;
    this.totalPages = Math.ceil(this.totalRowLength / this.itemsPerPage);
    this.calculateViewRows();
    this.rows$.subscribe((row: any) => console.log(row, 'row'))
  }

  public toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.calculateViewRows(page);
  }

  public calculateViewRows(page?: number): void {

    this.store.dispatch(appActions.loadChampions({ startYear: 2020, endYear: 2021 }));
   // this.store.dispatch(appActions.loadChampions());
    //this.store.getChampions(this.startYear + this.itemsPerPage*(this.currentPage - 1), this.startYear + this.itemsPerPage*this.currentPage);

  /*  if(page && page === this.totalPages){
    this.store.getChampions(this.startYear + this.itemsPerPage*(page-1), this.endYear);
   } */
  

  /*   this.rows$.pipe(takeUntil(this.destroy$), distinctUntilChanged())
    .subscribe((dataRes) => {
       this.rows = dataRes;
    }); */
  }
}
