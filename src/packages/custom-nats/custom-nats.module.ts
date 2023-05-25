// custom-nats.module.ts

import { DynamicModule, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { NatsService } from './nats.service';
import { ExampleController } from './nats.controller';

@Module({})
export class CustomNatsModule {
  static register(connectionString: string): DynamicModule {
    return {
      module: CustomNatsModule,
      controllers:[ExampleController],
      providers: [
        {
          provide: 'NATS_CONNECTION',
          useFactory: async () => {
            const client = new MongoClient(connectionString);
            await client.connect();
            return client;
          },
        },
        NatsService,
      ],
      exports: [NatsService],
    };
  }
}
