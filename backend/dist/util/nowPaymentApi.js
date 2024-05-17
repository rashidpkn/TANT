"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nowPaymentApi = void 0;
const axios_1 = require("axios");
exports.nowPaymentApi = axios_1.default.create({
    baseURL: 'https://api.nowpayments.io/v1/',
    headers: {
        'x-api-key': 'RB8DVXP-CXDMXMS-JBG9KJN-AEK3XSW'
    }
});
//# sourceMappingURL=nowPaymentApi.js.map