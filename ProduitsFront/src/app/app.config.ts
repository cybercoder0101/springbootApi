import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi, withInterceptors,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {tokenInterceptor} from "./services/token.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [

    importProvidersFrom(BrowserModule, FormsModule, HttpClientModule),

    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor]))

  ],
};
