import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DataStore } from '../../store/data.store';
import { Observable, Subject, Subscription, debounce, distinctUntilChanged, take, takeLast, takeUntil, takeWhile } from 'rxjs';
import { Champion } from '../../utils/types';
import { environment } from '../../../environments/environment';

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
  public rows$: Observable<Champion[]> = this.store.championList$;
  public rows: Champion[] = [];
  public totalPages:any;

  constructor(private store: DataStore) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.totalRowLength = this.endYear - this.startYear;
    this.totalPages = Math.ceil(this.totalRowLength / this.itemsPerPage);
    this.calculateViewRows();
  }

  public toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.calculateViewRows(page);
  }

  public calculateViewRows(page?: number): void {
    this.store.getChampions(this.startYear + this.itemsPerPage*(this.currentPage - 1), this.startYear + this.itemsPerPage*this.currentPage);

   if(page && page === this.totalPages){
    this.store.getChampions(this.startYear + this.itemsPerPage*(page-1), this.endYear);
   }
  

    this.rows$.pipe(takeUntil(this.destroy$), distinctUntilChanged())
    .subscribe((dataRes) => {
       this.rows = dataRes;
    });
  }
}
