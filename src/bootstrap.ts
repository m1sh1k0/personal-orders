import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from './monitoring/logger';

const { PORT, HOST, SWAGGER_PREFIX } = process.env;

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = await app.resolve(Logger);
  logger.setContext('bootstrap');
  app.useLogger(logger);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  await app.listen(PORT, HOST, () => {
    logger.info(`Server started at  ${HOST}:${PORT} 🔥`);
    logger.info(
      `Swagger doc available at ⚠️  http://${HOST}:${PORT}/${SWAGGER_PREFIX} ⚠️`,
    );
  });
}
