# SSR - Angular 21 Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and updated to Angular 21.

## Features

- **Angular 21** - Latest version with modern features and improvements
- **Server-Side Rendering (SSR)** - Full SSR support with Angular Universal
- **Standalone Components** - Modern architecture using standalone components
- **Signals** - Reactive state management with Angular Signals
- **Bootstrap 5** - Responsive UI framework
- **Font Awesome** - Icon library
- **Vitest** - Modern testing framework (replacing Karma)
- **TypeScript 5.7** - Latest TypeScript features
- **Clean Code** - Following best practices and clean code principles

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` or `vitest` to execute the unit tests via [Vitest](https://vitest.dev).

For test coverage:
```bash
npm run test:coverage
```

For UI mode:
```bash
npm run test:ui
```

## Server-Side Rendering

Run `npm run serve:ssr:ssr` to serve the SSR build. The server will listen on `http://localhost:4000`.

## Code Quality

Run `npm run lint` to check code quality and style issues.

## Architecture

- **Public Layout** - Layout for unauthenticated/public pages
- **Private Layout** - Layout for authenticated users
- **Standalone Components** - All components are standalone
- **Reactive Forms** - Using Angular Reactive Forms (as per user requirements)
- **Signals** - State management with Angular Signals

## Dependencies

- Angular 21.0.0
- Bootstrap 5.3.3
- Font Awesome 6.7.2
- RxJS 7.8.1
- TypeScript 5.7.2

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
