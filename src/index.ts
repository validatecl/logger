import {
  createLogger as _createLogger,
  transports,
  format,
  Logger,
  LoggerOptions
} from 'winston';

const { timestamp, prettyPrint } = format;

/**
 * Creates a new logger with the provided component name and `@validatecl/logger` as module name.
 *
 * @param {string} component The name of the component to log for.
 *
 * @returns {Logger} The logger instance.
 */
export function createLogger(component: string): Logger {
  const options: LoggerOptions = {
    level: process.env.LOG_LEVEL || 'info',
    transports: [new transports.Console()],
    defaultMeta: {
      module: '@validatecl/logger',
      component
    },
    format: format.combine(timestamp(), prettyPrint())
  };

  return _createLogger(options);
}
