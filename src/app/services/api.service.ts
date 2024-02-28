import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, filter, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { championsMapper, racesMapper } from '../utils/mappers';
import { Race, Champion, RacesDto, ChampionsDto } from '../utils/types';

const range = (start: number, stop: number, step = 1): number[] => {
  if (start >= stop)
    throw new Error('Start value should be lesser than stop value');

  return Array(stop - start)
    .fill(start)
    .map((x: number, y: number) => x + y * step);
};


//const seasons = range(environment.START_YEAR, environment.CURRENT_YEAR + 1);
//const seasons = range(environment.START_YEAR + 6, environment.CURRENT_YEAR + 1);

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = environment.BASE_URL;

  constructor(private httpClient: HttpClient) {
  }



  public getSeasons(start: number, end: number): Observable<Champion[]> {
    console.log(start, end, 'start and end get seasons')
    let seasons = range(start, end);
    const requests = seasons.map(season =>
      this.httpClient.get<ChampionsDto>(`${ this.apiUrl }${ season }/driverStandings/1.json`)
    );

      return forkJoin(requests).pipe(map((res: ChampionsDto[]) => championsMapper(res)));
  }

  public getRaceWinners(season: string): Observable<Race[]> {
    return this.httpClient.get<RacesDto>(`${ this.apiUrl }${ season }/results/1.json`)
      .pipe(map(res => racesMapper(res)));
  }
}


