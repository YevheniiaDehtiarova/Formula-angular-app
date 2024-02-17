import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { Champion, Race } from '../utils/types';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let testedChampion: Champion;
  let httpController: HttpTestingController;
  let apiUrl = environment.BASE_URL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController); // Get the HttpTestingController
  });
  testedChampion = {
    season: 'summer',
    driver: {
      name: 'aaa',
      nationality: 'bbbb',
      id: 'cccc'
    },
    constructorName: 'dddd'
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test return champions from getSeasons', () => {
    const expectedChampions: Champion[] = [];
    expectedChampions.push(testedChampion);
    service.getSeasons().subscribe((seasons) => {
      expect(seasons).toEqual(expectedChampions);
    });

    const req = httpController.expectOne({ method: 'GET', url: `${service['apiUrl']}1/driverStandings/1.json` }); // Use service['apiUrl']
    req.flush(expectedChampions);
  });

  it('should test return races from getRaceWinners', () => {
    let testedSeason = 'aaaa'
    const expectedWinners: Race[] = [];
    service.getRaceWinners(testedSeason).subscribe((winners) => {
      expect(winners).toEqual(expectedWinners);
    });
    const req = httpController.expectOne({ method: 'GET', url: `${service['apiUrl']}${testedSeason}/results/1.json` }); // Use service['apiUrl']
    req.flush(expectedWinners);
  });
});
