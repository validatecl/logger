import { Logger } from 'winston/index';
import { expect } from 'chai';
import faker from 'faker';

import { createLogger } from '../../src';

process.env.LOG_LEVEL = 'silly';

// Winston has this declared on their repo but it's not on NPM yet...
interface FixedLogger extends Logger {
  defaultMeta?: Record<string, any>;
}

describe('Logger', function () {
  let logLevel: string;

  before(function () {
    logLevel = String(process.env.LOG_LEVEL);
  });

  it('should be a function', function () {
    expect(createLogger).to.be.a('function');
  });

  it('should create a new logger instance', function () {
    const name: string = faker.commerce.productName();
    const log: FixedLogger = createLogger(name);

    expect(log).to.be.an('object');
    expect(log.level).to.equal(process.env.LOG_LEVEL);
    expect(log.defaultMeta.module).to.equal('@validatecl/logger');
    expect(log.defaultMeta.component).to.equal(name);
  });

  it('should create a new logger default (info) log level', function () {
    process.env.LOG_LEVEL = '';

    const name: string = faker.commerce.productName();
    const log: FixedLogger = createLogger(name);

    expect(log).to.be.an('object');
    expect(log.level).to.equal('info');
    expect(log.defaultMeta.module).to.equal('@validatecl/logger');
    expect(log.defaultMeta.component).to.equal(name);
  });

  it('should create a new logger with a custom log level', function () {
    process.env.LOG_LEVEL = 'warn';

    const name: string = faker.commerce.productName();
    const log: FixedLogger = createLogger(name);

    expect(log).to.be.an('object');
    expect(log.level).to.equal('warn');
    expect(log.defaultMeta.module).to.equal('@validatecl/logger');
    expect(log.defaultMeta.component).to.equal(name);
  });

  after(function () {
    process.env.LOG_LEVEL = logLevel;
  });
});
