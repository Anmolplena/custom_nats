import { NatsService } from './nats.service';
export declare class ExampleController {
    private readonly natsService;
    constructor(natsService: NatsService);
    createStream(): Promise<string>;
    publishData(data: any): Promise<string>;
    subscribeToData(): Promise<string>;
}
