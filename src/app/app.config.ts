import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
    StoreModule.forFeature('app', appReducer),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}), 
    EffectsModule.forFeature([AppEffects])), 
    provideStoreDevtools({
       maxAge: 25,
       logOnly: !isDevMode(),
       autoPause: true,
       trace: false,
       traceLimit: 75,
       connectInZone: true,

    })
  ]
};