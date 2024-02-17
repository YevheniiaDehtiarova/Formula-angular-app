import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsPageComponent } from './seasons-page.component';
import { DataStore } from 'src/app/store/data.store';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeasonsPageComponent', () => {
  let component: SeasonsPageComponent;
  let fixture: ComponentFixture<SeasonsPageComponent>;
  let store: DataStore;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonsPageComponent],
      providers: [DataStore, ApiService], // Provide DataStore and ApiService
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SeasonsPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(DataStore); // Inject DataStore
    apiService = TestBed.inject(ApiService); // Inject ApiService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test init method', () => {
    component.ngOnInit();
    const spy = spyOn(store, 'getChampions').and.callThrough();
    store.getChampions();
    expect(spy).toHaveBeenCalled();
  });

})
