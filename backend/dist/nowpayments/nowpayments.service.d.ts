import { CreateNowpaymentDto } from './dto/create-nowpayment.dto';
import { UpdateNowpaymentDto } from './dto/update-nowpayment.dto';
export declare class NowpaymentsService {
    create(createNowpaymentDto: CreateNowpaymentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNowpaymentDto: UpdateNowpaymentDto): string;
    remove(id: number): string;
}
