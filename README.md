# @validatecl/logger

[![Build Status](https://travis-ci.org/validatecl/logger.svg?branch=main)](https://travis-ci.org/validatecl/logger)
![GitHub](https://img.shields.io/github/license/validatecl/logger)
![GitHub last commit](https://img.shields.io/github/last-commit/validatecl/logger)
![npm (scoped)](https://img.shields.io/npm/v/@validatecl/logger)
![npm](https://img.shields.io/npm/dw/@validatecl/logger)

Simple console logger based on [Winston](https://github.com/winstonjs/winston).

It's really just a preconfigured instance of a Winston Logger.

## Instalation

```sh
npm i @validatecl/logger
```

## Usage

Let's assume you run you app with:

`$ LOG_LEVEL=info node index.js`

Then, the logger will log anything that has lower priority than the `LOG_LEVEL` env variable:

`./some/module.ts`:

```ts
import { createLogger } from '@validatecl/logger';

const log: FixedLogger = createLogger('My App Module');

log.debug('This is not necessary on production.'); // Will not log
log.info('This is very informational.');
log.warn('Beware! You\'re about to do a thing.');
log.error('IT FAILED!');
log.error('IT FAILED! SEE DETAILS:', {
  extra: 'Yeah, it was bad...',
  error
});
```

Read more about [Winston's log levels](https://github.com/winstonjs/winston#using-logging-levels) to know what will be logged depending on your `LOG_LEVEL` env variable.

## API Docs

Please visit [the documentation page](https://validatecl.github.io/logger/) for more information.
