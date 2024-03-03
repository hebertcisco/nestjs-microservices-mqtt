#!/usr/bin/env node
import 'reflect-metadata';

import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { MQTT_URL, PORT } from './shared/constants/global';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.MQTT,
            options: {
                url: MQTT_URL,
            },
        },
    );
    await app.listen();
}

((): void => {
    bootstrap()
        .then(() => process.stdout.write(`Listening on port ${PORT}...\n`))
        .catch((err) => {
            process.stderr.write(`Error: ${err.message}\n`);
            process.exit(1);
        });
})();
