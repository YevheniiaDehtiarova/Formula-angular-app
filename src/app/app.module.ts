
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
import { ErrorHandler, NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';



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

  ],
  exports: [SeasonsPageComponent],
  providers: [
    ApiService,
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
