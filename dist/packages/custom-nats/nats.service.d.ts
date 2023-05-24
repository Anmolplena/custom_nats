import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Msg, PublishOptions, SubscriptionOptions } from 'nats';
export declare class NatsService implements OnModuleInit, OnModuleDestroy {
    private client;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): void;
    publish(subject: string, data: any, options?: PublishOptions): void;
    subscribe(subject: string, callback: (msg: Msg) => void, options?: SubscriptionOptions): void;
    jsPublish(subject: string, data: any, options?: PublishOptions): Promise<void>;
    jsSubscribe(subject: string, callback: (msg: Msg) => void, options?: SubscriptionOptions): Promise<void>;
    jsQueueSubscribe(subject: string, queueGroup: string, callback: (msg: Msg) => void, options?: SubscriptionOptions): Promise<void>;
}
