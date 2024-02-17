import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacesPageComponent } from './races-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

describe('RacesPageComponent', () => {
  let component: RacesPageComponent;
  let fixture: ComponentFixture<RacesPageComponent>;
  let route: ActivatedRoute;
  let params: any;

  beforeEach(async () => {
    params = new Subject<any>();
    route = {
      paramMap: params,
    } as any;
    
    await TestBed.configureTestingModule({
      declarations: [ RacesPageComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '2005',
              },
            },
          },
        },
      ]
    })
    await TestBed.compileComponents();

    fixture = TestBed.createComponent(RacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('should test route params in init', async () => {
    component.ngOnInit();
    const spyRoute = spyOn(route.params, 'subscribe');
    const testYear = 2005;
    
    await fixture.whenStable();

    spyRoute.and.returnValue(params);
    expect(component.year).toBe(testYear);
  });
});
