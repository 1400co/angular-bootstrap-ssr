import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';
import { provideHttpClient } from '@angular/common/http';
import { PixelModule } from 'ngx-multi-pixel';

registerLocaleData(localeEsCo, 'es-CO');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()),
     provideClientHydration(),
     provideToastr(),
     provideAnimations(),
     provideHttpClient(),
     importProvidersFrom(PixelModule.forRoot({ enabled: true, pixelId: ["000000000000"] }))
     ]
};
