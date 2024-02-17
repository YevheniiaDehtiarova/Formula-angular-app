import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, take, throwError } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Champion, Race } from '../utils/types';
import { CustomErrorHandler } from '../services/error-handler.service';

/*
* this is a simple implementation of data store
* it uses BehaviorSubjects that are exposed only as Observables, so Components can't modify them directly
* */

@Injectable({
  providedIn: 'root'
})
export class DataStore {

  public racesList = new BehaviorSubject<Race[]>([]);
  public championList = new BehaviorSubject<Champion[]>([]);
  public championsLoading = new BehaviorSubject(false);
  public racesLoading = new BehaviorSubject(false);

  public racesLoading$ = this.racesLoading.asObservable();
  public championsLoading$ = this.championsLoading.asObservable();
  public racesList$ = this.racesList.asObservable();
  public championList$ = this.championList.asObservable();

  public championListItems: any

  constructor(private api: ApiService) {
  }

  public getChampions(start: number,end:number) {
    this.championsLoading.next(true);
    this.api.getSeasons(start,end)
      .pipe(
        take(1),
        catchError((err) => {
          this.championsLoading.next(false);
          return throwError(err)
        }))
      .subscribe((list) => {
        this.championList.next(list);
        this.championsLoading.next(false);
        this.championListItems = list.length;
      });
  }

  public getRaceWinners(year: string) {
    this.racesList.next([]);
    this.racesLoading.next(true);
    this.api.getRaceWinners(year)
      .pipe(take(1), catchError(err => {
        this.racesLoading.next(false);
        return throwError(err);
      }))
      .subscribe(list => {
        this.racesList.next(list);
        this.racesLoading.next(false);
      });
  }
}
