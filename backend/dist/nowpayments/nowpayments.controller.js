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
exports.NowpaymentsController = void 0;
const common_1 = require("@nestjs/common");
const nowpayments_service_1 = require("./nowpayments.service");
const create_nowpayment_dto_1 = require("./dto/create-nowpayment.dto");
const nowPaymentApi_1 = require("../util/nowPaymentApi");
const create_invoice_dto_1 = require("./dto/create-invoice.dto");
let NowpaymentsController = class NowpaymentsController {
    constructor(nowpaymentsService) {
        this.nowpaymentsService = nowpaymentsService;
    }
    async apiStatus() {
        try {
            const { data } = await nowPaymentApi_1.nowPaymentApi.get('status');
            return data;
        }
        catch (error) {
            console.error(error);
            return { error: error.message };
        }
    }
    async Auth(body) {
        try {
            const { email, password } = body;
            if (!email || !password) {
                throw new common_1.BadRequestException('Email and password are mandiatory');
            }
            const { data } = await nowPaymentApi_1.nowPaymentApi.post('/auth', JSON.stringify({ email, password }));
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async currencies() {
        try {
            const res = await nowPaymentApi_1.nowPaymentApi.get('/currencies?fixed_rate=true');
            return res.data;
        }
        catch (error) {
            throw error;
        }
    }
    async createInvoice(createInvoiceDto) {
        try {
            const { data } = await nowPaymentApi_1.nowPaymentApi.post('/invoice', createInvoiceDto);
            return data.invoice_url;
        }
        catch (error) {
            throw error;
        }
    }
    create(createNowpaymentDto) {
        return this.nowpaymentsService.create(createNowpaymentDto);
    }
};
exports.NowpaymentsController = NowpaymentsController;
__decorate([
    (0, common_1.Get)("api-status"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NowpaymentsController.prototype, "apiStatus", null);
__decorate([
    (0, common_1.Post)('auth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NowpaymentsController.prototype, "Auth", null);
__decorate([
    (0, common_1.Get)('currencies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NowpaymentsController.prototype, "currencies", null);
__decorate([
    (0, common_1.Post)('invoice'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", Promise)
], NowpaymentsController.prototype, "createInvoice", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nowpayment_dto_1.CreateNowpaymentDto]),
    __metadata("design:returntype", void 0)
], NowpaymentsController.prototype, "create", null);
exports.NowpaymentsController = NowpaymentsController = __decorate([
    (0, common_1.Controller)('nowpayments'),
    __metadata("design:paramtypes", [nowpayments_service_1.NowpaymentsService])
], NowpaymentsController);
//# sourceMappingURL=nowpayments.controller.js.map