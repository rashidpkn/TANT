import axios from "axios";

export const nowPaymentApi = axios.create({
    baseURL:'https://api.nowpayments.io/v1/',
    headers:{
        'x-api-key':'RB8DVXP-CXDMXMS-JBG9KJN-AEK3XSW'
    }
})