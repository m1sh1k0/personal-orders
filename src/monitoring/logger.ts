import { ConsoleLogger, Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import winston, { createLogger, format } from 'winston';
import { SimpleConsoleTransport } from './logger.transport';
const { combine, simple } = format;

@Injectable({ scope: 1 })
export class Logger extends ConsoleLogger {
  private readonly logger: winston.Logger;
  constructor(private readonly configService: ConfigService) {
    super();
    const level = this.configService.get<string>('logLevel');
    this.logger = createLogger({
      level,
      levels: {
        info: 0,
        ok: 1,
        error: 2,
      },
      format: combine(simple()),
      defaultMeta: {
        context: super.context || 'defaultContext',
      },
      transports: [new SimpleConsoleTransport()],
    });
  }

  setContext(context: string): void {
    super.context = context;
    this.logger.defaultMeta.context = context;
  }

  info(message: any): void {
    let _message: string;

    if (typeof message === 'object') {
      _message = '\n' + JSON.stringify(message, null, 4);
    } else {
      _message = message;
    }

    this.logger.info(_message);
  }

  // error(error: string): void {
  //   this.logger.level = 'error';
  //   this.logger.error(error);
  // }
}
