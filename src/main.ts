import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NatsService } from './packages/custom-nats/nats.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const natsService = app.get(NatsService);

  // Initialize NATS connection
  await natsService.onModuleInit();

  await app.listen(3000,() => {
    console.log('server is listening on port 3000');
  });
}
bootstrap();

