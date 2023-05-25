import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { connect, NatsConnection, PublishOptions, SubscriptionOptions } from 'nats';

@Injectable()
export class NatsService implements OnModuleInit, OnModuleDestroy {
  private client: NatsConnection;

  async onModuleInit() {
    // Connect to NATS server
    this.client = await connect({ servers: ['nats://localhost:4222'] }); // Replace with your NATS server address
  }

  onModuleDestroy() {
    if (this.client) {
      this.client.close();
    }
  }

  async createStream(stream: string, subject: string): Promise<void> {
    const payload = JSON.stringify({ name: stream, subjects: [subject] });
    await this.client.request('STREAM.CREATE', Uint8Array.from(Buffer.from(payload)));
  }

  publish(subject: string, data: any, options?: PublishOptions): void {
    const payload = JSON.stringify(data);
    this.client.publish(subject, Uint8Array.from(Buffer.from(payload)), options);
  }

  subscribe(subject: string, callback: (msg: any) => void, options?: SubscriptionOptions): void {
    this.client.subscribe(subject, { callback, ...options });
  }
}
