# AcousticContentWebApp

## Usage

### Requirements

* node ^10.0.0
* npm ^6.0.0

### Development server

*Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.

### Build

* Run `npm run build` to build the project. 

### Running unit tests

* Run `npm run test` to execute the unit tests.
* Run `npm run test:cc` to execute the unit tests with coverage.

### Lint

* Run `npm run lint` to execute code linter

## Architecture

### Styles (scss)

* Code should following BEM styling.

### Structure

```
--> app/src
    --> layout - app layout
    --> modules - business modules, lazy loaded
        --> article
    --> shared - shared components, models etc.
```

