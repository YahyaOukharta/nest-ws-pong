import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app: NestFastifyApplication =
    await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      {
        cors: {
          origin: ['http://localhost:8000', 'http://localhost'],
          credentials: true,
        },
      },
    );
  // const config: ConfigService = app.get(ConfigService);
  const port = 3001;
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port, '0.0.0.0', () => {
    console.log('[WEB]', `http://localhost:${port}`);
  });
}
bootstrap();
