
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';


import { ApiService } from '../services/api.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as appActions from '../store/app.actions'



@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private apiService: ApiService) { }

  getSeasons$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.loadChampions),
    mergeMap((action) => this.apiService.getSeasons(action.startYear, action.endYear).pipe(
      map(champions => appActions.loadChampionsSuccess({ champions })),
      catchError(error => of(appActions.loadChampionsFailure({ error })))
    ))
  ));

}
