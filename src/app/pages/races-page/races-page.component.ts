import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { DataStore } from '../../store/data.store';
import { Race } from '../../utils/types';

@Component({
  selector: 'app-races-page',
  templateUrl: './races-page.component.html',
  styleUrls: ['./races-page.component.scss']
})
export class RacesPageComponent implements OnInit, OnDestroy {

  public year?: number;
  public winnerId: string | undefined;
  public rows$: Observable<Race[]> = this.store.racesList$;
  public rows: any;
  public totalRaceLength: any;
  currentPage = 1;
  itemsPerPage = 7;

  public readonly columns = [
    {
      columnName: 'Race'
    },
    {
      columnName: 'Winner'
    },
    {
      columnName: 'Constructor'
    }
  ];
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private store: DataStore) { }

  ngOnInit(): void {
    this.calculateViewRows();
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: any) => {
        if (params.year) {
          this.year = params.year;
          this.winnerId = params.details;
          this.store.getRaceWinners(params.year);
        }
      })
  }
  ngOnDestroy() {
    this.destroy$.next();
  }

  public calculateViewRows() {
    this.rows$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.totalRaceLength = data.length;
      this.rows = data;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const items = this.rows.slice(startIndex, startIndex + this.itemsPerPage);
      this.rows = items;
    });
  }
  onPageChange(page: any) {
    this.currentPage = page;
    this.calculateViewRows();
  }

  public isWinner(row: any) {
    if (row.driver.id === this.winnerId) {
      return 'winner-style'
    }
    return ''
  }

}
