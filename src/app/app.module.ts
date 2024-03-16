
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SeasonsPageComponent } from './pages/seasons-page/seasons-page.component';
import { RacesPageComponent } from './pages/races-page/races-page.component';
import { TableComponent } from './components/table/table.component';
import { DriverComponent } from './components/driver/driver.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CustomErrorHandler } from './services/error-handler.service';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './pages/error/error.component';
import { ErrorHandler, NgModule, isDevMode } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { StoreDevtoolsModule, StoreDevtoolsOptions, provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    SeasonsPageComponent,
    RacesPageComponent,
    SpinnerComponent,
    ErrorComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DriverComponent,
    HttpClientModule,
    BackButtonComponent,
    TableComponent, 
    StoreModule.forFeature('app', appReducer),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}), 
    EffectsModule.forFeature([AppEffects]), 
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  exports: [SeasonsPageComponent],
  providers: [
    ApiService,
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    /* provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    } as StoreDevtoolsOptions) */
  ],
  bootstrap: [AppComponent],
 /*  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] */
})
export class AppModule {}
