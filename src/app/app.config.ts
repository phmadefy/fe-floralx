import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './core/reducers';
import { authReducer } from './core/reducers/auth.reducers';
import { AuthEffects } from './core/effects/auth.effect';
import { InterceptService } from './services/intercept.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true },
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    importProvidersFrom(
      StoreModule.forRoot(reducers, { metaReducers }),
      StoreModule.forFeature('auth', authReducer),
      EffectsModule.forRoot([AuthEffects])
    ),
  ],
};
