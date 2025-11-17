import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  await app.init();
  return server;
}

let cachedServer: express.Application;

export async function getServer() {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return cachedServer;
}

export default async function handler(req: express.Request, res: express.Response) {
  const server = await getServer();
  server(req, res);
}