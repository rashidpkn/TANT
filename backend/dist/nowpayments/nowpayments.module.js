"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NowpaymentsModule = void 0;
const common_1 = require("@nestjs/common");
const nowpayments_service_1 = require("./nowpayments.service");
const nowpayments_controller_1 = require("./nowpayments.controller");
let NowpaymentsModule = class NowpaymentsModule {
};
exports.NowpaymentsModule = NowpaymentsModule;
exports.NowpaymentsModule = NowpaymentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [nowpayments_controller_1.NowpaymentsController],
        providers: [nowpayments_service_1.NowpaymentsService],
    })
], NowpaymentsModule);
//# sourceMappingURL=nowpayments.module.js.map