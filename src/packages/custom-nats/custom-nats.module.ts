// custom-nats.module.ts

import { DynamicModule, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { NatsService } from './nats.service';

@Module({})
export class CustomNatsModule {
  static register(connectionString: string): DynamicModule {
    return {
      module: CustomNatsModule,
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
