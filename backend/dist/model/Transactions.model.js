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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Transactions = class Transactions extends sequelize_typescript_1.Model {
};
exports.Transactions = Transactions;
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Transactions.prototype, "walletAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], Transactions.prototype, "totalToken", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.FLOAT, defaultValue: 0 }),
    __metadata("design:type", Number)
], Transactions.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, defaultValue: 'usd' }),
    __metadata("design:type", String)
], Transactions.prototype, "currency", void 0);
exports.Transactions = Transactions = __decorate([
    sequelize_typescript_1.Table
], Transactions);
//# sourceMappingURL=Transactions.model.js.map