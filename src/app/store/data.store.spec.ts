import {
    TestBed,
  } from '@angular/core/testing';
  import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../services/api.service';
import { DataStore } from './data.store';
import { Champion, Race } from '../utils/types';
import { HttpClient } from '@angular/common/http';
  
  describe('Data Store Component', () => {
    let http: HttpClient;
    let store: DataStore;
    let testedList: Array<Champion>= [];
    let testedRace: Array<Race> =[];
    let apiService: ApiService;

  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ApiService]
      }).compileComponents();
      apiService = TestBed.inject(ApiService);
      http = TestBed.inject(HttpClient);
      store = TestBed.inject(DataStore);
  });

  it('should test get champions method and get seasons service',async () => {

    expect(apiService.getSeasons()).toBeTruthy();
    const spy = spyOn(apiService, 'getSeasons').and.callThrough();
    await apiService.getSeasons()
    await store.getChampions();
    expect(spy).toHaveBeenCalled();

    apiService.getSeasons().subscribe((value) => {
      expect(value).toEqual(testedList);
      expect(store.championList.next(testedList)).toBeTruthy();
      expect(store.championsLoading.next(false)).toBeTruthy();
    });
  });

  it('should test getRaceWinners method',async () => {
    let testedYear = 'abc';
    expect(apiService.getRaceWinners(testedYear)).toBeTruthy();

    await apiService.getRaceWinners(testedYear).subscribe((value) => {
        expect(value).toEqual(testedRace);
        expect(store.racesList.next(testedRace)).toBeTruthy();
        expect(store.racesLoading.next(false)).toBeTruthy();
    })
  })


})
  