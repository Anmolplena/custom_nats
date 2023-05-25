import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PublishOptions, SubscriptionOptions } from 'nats';
export declare class NatsService implements OnModuleInit, OnModuleDestroy {
    private client;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): void;
    createStream(stream: string, subject: string): Promise<void>;
    publish(subject: string, data: any, options?: PublishOptions): void;
    subscribe(subject: string, callback: (msg: any) => void, options?: SubscriptionOptions): void;
}
