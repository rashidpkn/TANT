import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transactions } from 'src/model/Transactions.model';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(createTransactionDto: CreateTransactionDto): {
        message: string;
    };
    findAll(): Promise<Transactions[]>;
    findOne(id: string): Promise<Transactions>;
    update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
