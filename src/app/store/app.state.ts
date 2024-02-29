import { Champion, Race } from "../utils/types";


export interface AppState {
    championsList: Array<Champion>;
    racesList: Array<Race>
    loading: boolean;
  }

  export interface StoreInterface {
    app: AppState
  }