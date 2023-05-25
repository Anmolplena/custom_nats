import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { NatsService } from './nats.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly natsService: NatsService) {}

  @Post('create-stream')
  async createStream(): Promise<string> {
    try {
      await this.natsService.createStream('example-stream', 'example.subject');
      return 'Stream created successfully.';
    } catch (error) {
        console.log(error,"anmolerror");
      throw new Error('Failed to create stream.');
    }
  }

  @Post('publish')
  async publishData(@Body() data: any): Promise<string> {
    try {
      await this.natsService.publish('example.subject', data);
      return 'Data published successfully.';
    } catch (error) {
      throw new Error('Failed to publish data.');
    }
  }

  @Get('subscribe')
  async subscribeToData(): Promise<string> {
    try {
      await this.natsService.subscribe('example.subject', (msg) => {
        console.log('Received data:', msg.data);
      });
      return 'Subscribed to data stream.';
    } catch (error) {
      throw new Error('Failed to subscribe to data stream.');
    }
  }
}
