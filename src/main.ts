import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';
import * as fst from "@fastify/static"

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
    );
    app.useStaticAssets({
      root :join(__dirname, '..', 'static')
    });

  await app.listen(process.env.PORT || 3001,"0.0.0.0");
}
bootstrap();
