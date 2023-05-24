"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsService = void 0;
const common_1 = require("@nestjs/common");
const nats_1 = require("nats");
let NatsService = class NatsService {
    async onModuleInit() {
        this.client = await (0, nats_1.connect)({ servers: ['nats://localhost:4222'] });
    }
    onModuleDestroy() {
        if (this.client) {
            this.client.close();
        }
    }
    publish(subject, data, options) {
        this.client.publish(subject, JSON.stringify(data), options);
    }
    subscribe(subject, callback, options) {
        this.client.subscribe(subject, callback, options);
    }
    async jsPublish(subject, data, options) {
        await this.client.request('js.publish', JSON.stringify({ subject, data }), options);
    }
    async jsSubscribe(subject, callback, options) {
        await this.client.subscribe(subject, callback, options);
    }
    async jsQueueSubscribe(subject, queueGroup, callback, options) {
        await this.client.subscribe(subject, Object.assign({ queue: queueGroup }, options), callback);
    }
};
NatsService = __decorate([
    (0, common_1.Injectable)()
], NatsService);
exports.NatsService = NatsService;
//# sourceMappingURL=nats.service.js.map