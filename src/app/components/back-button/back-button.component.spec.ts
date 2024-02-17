import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';

import { BackButtonComponent } from './back-button.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { SeasonsPageComponent } from 'src/app/pages/seasons-page/seasons-page.component';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BackButtonComponent,
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: '', component: SeasonsPageComponent}
        ]) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
