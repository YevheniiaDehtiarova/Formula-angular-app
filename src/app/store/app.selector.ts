import { createSelector } from '@ngrx/store';
import { AppState, StoreInterface } from './app.state';

const selectAppState = (state: StoreInterface) => {
    console.log(state, 'STATE')
  return state.app; 
};

export const selectChampions = createSelector(
    selectAppState,
    (state: AppState) =>{
     console.log(state, 'STATE')
    return state.championsList
}


  );