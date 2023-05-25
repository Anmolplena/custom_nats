"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleController = void 0;
const common_1 = require("@nestjs/common");
const nats_service_1 = require("./nats.service");
let ExampleController = class ExampleController {
    constructor(natsService) {
        this.natsService = natsService;
    }
    async createStream() {
        try {
            await this.natsService.createStream('example-stream', 'example.subject');
            return 'Stream created successfully.';
        }
        catch (error) {
            console.log(error, "anmolerror");
            throw new Error('Failed to create stream.');
        }
    }
    async publishData(data) {
        try {
            await this.natsService.publish('example.subject', data);
            return 'Data published successfully.';
        }
        catch (error) {
            throw new Error('Failed to publish data.');
        }
    }
    async subscribeToData() {
        try {
            await this.natsService.subscribe('example.subject', (msg) => {
                console.log('Received data:', msg.data);
            });
            return 'Subscribed to data stream.';
        }
        catch (error) {
            throw new Error('Failed to subscribe to data stream.');
        }
    }
};
__decorate([
    (0, common_1.Post)('create-stream'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExampleController.prototype, "createStream", null);
__decorate([
    (0, common_1.Post)('publish'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExampleController.prototype, "publishData", null);
__decorate([
    (0, common_1.Get)('subscribe'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExampleController.prototype, "subscribeToData", null);
ExampleController = __decorate([
    (0, common_1.Controller)('example'),
    __metadata("design:paramtypes", [nats_service_1.NatsService])
], ExampleController);
exports.ExampleController = ExampleController;
//# sourceMappingURL=nats.controller.js.map