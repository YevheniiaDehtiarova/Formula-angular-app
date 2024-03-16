import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as appActions from './app.actions'



export const initialState: AppState = {
    championsList: [],
    racesList: [],
    loading: false
};


export const appReducer = createReducer(
  initialState,
  on(appActions.loadChampionsSuccess, (state, { champions }) => {
    console.log('Champions loaded successfully:', champions);
    console.log(state, 'state')
    return {...state,
    championsList: champions
    }
    
}),
);


