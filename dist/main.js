"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nats_service_1 = require("./packages/custom-nats/nats.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const natsService = app.get(nats_service_1.NatsService);
    await natsService.onModuleInit();
    await app.listen(3000, () => {
        console.log('server is listening on port 3000');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map