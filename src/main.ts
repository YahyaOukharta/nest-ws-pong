import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process?.env.GAME_PORT || 3001;
  const CORS = process.env.CORS || 'http://localhost';
  const app: NestFastifyApplication =
    await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      {
        cors: {
          origin: [
            CORS,
          ],
          credentials: true,
        },
      },
    );
  // const config: ConfigService = app.get(ConfigService);
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(PORT, '0.0.0.0', () => {
    console.log('[GAME]', `http://0.0.0.0:${PORT}`);
  });
}
bootstrap();
