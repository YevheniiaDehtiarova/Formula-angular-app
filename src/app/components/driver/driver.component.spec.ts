import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverComponent } from './driver.component';

describe('DriverComponent', () => {
  let component: DriverComponent;
  let fixture: ComponentFixture<DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test input name when Driver Component init', () => {
    const testName = 'abc';
    component.name = testName;
    fixture.detectChanges();
    expect(component.name).toEqual(testName);
  });

  it('should test input nationality when Table Component init', () => {
    const testedNationality = 'abc'
    component.nationality = testedNationality;
    fixture.detectChanges();
    expect(component.nationality).toEqual(testedNationality)
});


});
