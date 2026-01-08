import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { PixelModule } from 'ngx-multi-pixel';

registerLocaleData(localeEsCo, 'es-CO');

export const appConfig: ApplicationConfig = {
  providers: [
    // Router configuration with modern features
    provideRouter(
      routes,
      withHashLocation(),
      withComponentInputBinding(), // Enable component input binding from route params
      withViewTransitions() // Enable view transitions for better UX
    ),
    // Client hydration with event replay for SSR
    provideClientHydration(withEventReplay()),
    // Toastr notifications
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),
    // Animations
    provideAnimations(),
    // HTTP client with fetch API and interceptors
    provideHttpClient(
      withFetch(), // Use fetch API instead of XMLHttpRequest
      withInterceptorsFromDi()
    ),
    // Multi-pixel tracking module
    importProvidersFrom(
      PixelModule.forRoot({ 
        enabled: true, 
        pixelId: ["000000000000"] 
      })
    )
  ]
};
