import { ELoggerColors } from './logger.colors';
import * as t from 'winston-transport';

export class SimpleConsoleTransport extends t {
  constructor() {
    super();
  }
  log = (info, callback) => {
    const { level, message, stack, context } = info;
    console.log(
      `${
        ELoggerColors.FgYellow
      }[Logger] - ${level.toUpperCase()} [${context}]\x1b[0m ${message}`,
      stack ? '\n' + stack : '',
    );
    if (callback) {
      callback();
    }
  };

  error = (info, callback) => {
    const { level, message, stack, context } = info;
    console.log(
      `${
        ELoggerColors.FgYellow
      } [Logger] - ${level.toUpperCase()} [${context}] ${message}\x1b[0m`,
      stack ? '\n' + stack : '',
    );
    if (callback) {
      callback();
    }
  };
}
