import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { InjectionToken } from '@angular/core';

import { routes } from './app.routes';

export const URL_SERVER = new InjectionToken<String>('Servidor');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {provide: URL_SERVER , useValue: 'http://localhost:8080'} ]
};

