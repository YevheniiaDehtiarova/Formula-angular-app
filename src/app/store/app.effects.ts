
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';


import { ApiService } from '../services/api.service';


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private apiService: ApiService) { }

}
