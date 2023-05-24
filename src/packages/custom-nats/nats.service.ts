// nats.service.ts

import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import {  connect, Msg, NatsConnection, PublishOptions, SubscriptionOptions } from 'nats';

@Injectable()
export class NatsService implements OnModuleInit, OnModuleDestroy {
  private client: any;

  async onModuleInit() {
    // Connect to NATS server
    this.client = await connect({ servers: ['nats://localhost:4222'] }); 
  }

  onModuleDestroy() {
    if (this.client) {
      this.client.close();
    }
  }

  publish(subject: string, data: any, options?: PublishOptions): void {
    this.client.publish(subject, JSON.stringify(data), options);
  }

  subscribe(subject: string, callback: (msg: Msg) => void, options?: SubscriptionOptions): void {
    this.client.subscribe(subject, callback, options);
  }

  async jsPublish(subject: string, data: any, options?: PublishOptions): Promise<void> {
    await this.client.request('js.publish', JSON.stringify({ subject, data }), options);
  }

  async jsSubscribe(
    subject: string,
    callback: (msg: Msg) => void,
    options?: SubscriptionOptions,
  ): Promise<void> {
    await this.client.subscribe(subject, callback, options);
  }

  async jsQueueSubscribe(
    subject: string,
    queueGroup: string,
    callback: (msg: Msg) => void,
    options?: SubscriptionOptions,
  ): Promise<void> {
    await this.client.subscribe(subject, { queue: queueGroup, ...options }, callback);
  }
}
