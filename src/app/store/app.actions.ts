import { createAction, props } from "@ngrx/store";
import { Champion } from "../utils/types";

export const loadChampions = createAction(
    '[Champions Page] Load Champions',
    props<{ startYear: number, endYear: number }>()
  );
export const loadChampionsSuccess = createAction('[Champions API] Load Champions Success', props<{ champions: Champion[] }>());
export const loadChampionsFailure = createAction('[Champions API] Load Champions Failure', props<{ error: any }>());



