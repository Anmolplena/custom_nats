// app.module.ts

import { Module } from '@nestjs/common';
import { CustomNatsModule } from './packages/custom-nats/custom-nats.module';

@Module({
  imports: [
    // Other modules
    CustomNatsModule.register('mongodb://localhost:27017/nats12'), // Replace with your MongoDB connection string and database name
  ],
})
export class AppModule {}
