import { createReducer } from '@ngrx/store';
import { AppState } from './app.state';



export const initialState: AppState = {
    championsList: [],
    racesList: [],
    loading: false
};


export const appReducer = createReducer(
  initialState,
 // on(appActions.setMoviesFromLocalStorage, (state, { movies }) => ({ ...state, watchList: movies })),
);


