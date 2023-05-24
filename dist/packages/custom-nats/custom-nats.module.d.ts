import { DynamicModule } from '@nestjs/common';
export declare class CustomNatsModule {
    static register(connectionString: string): DynamicModule;
}
