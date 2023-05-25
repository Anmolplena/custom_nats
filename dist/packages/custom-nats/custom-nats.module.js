"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomNatsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomNatsModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const nats_service_1 = require("./nats.service");
const nats_controller_1 = require("./nats.controller");
let CustomNatsModule = CustomNatsModule_1 = class CustomNatsModule {
    static register(connectionString) {
        return {
            module: CustomNatsModule_1,
            controllers: [nats_controller_1.ExampleController],
            providers: [
                {
                    provide: 'NATS_CONNECTION',
                    useFactory: async () => {
                        const client = new mongodb_1.MongoClient(connectionString);
                        await client.connect();
                        return client;
                    },
                },
                nats_service_1.NatsService,
            ],
            exports: [nats_service_1.NatsService],
        };
    }
};
CustomNatsModule = CustomNatsModule_1 = __decorate([
    (0, common_1.Module)({})
], CustomNatsModule);
exports.CustomNatsModule = CustomNatsModule;
//# sourceMappingURL=custom-nats.module.js.map