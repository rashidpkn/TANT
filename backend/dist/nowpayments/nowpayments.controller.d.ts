import { NowpaymentsService } from './nowpayments.service';
import { CreateNowpaymentDto } from './dto/create-nowpayment.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
export declare class NowpaymentsController {
    private readonly nowpaymentsService;
    constructor(nowpaymentsService: NowpaymentsService);
    apiStatus(): Promise<any>;
    Auth(body: {}): Promise<any>;
    currencies(): Promise<any>;
    createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<any>;
    create(createNowpaymentDto: CreateNowpaymentDto): string;
}
