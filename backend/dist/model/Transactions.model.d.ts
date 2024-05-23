import { Model } from 'sequelize-typescript';
export declare class Transactions extends Model {
    walletAddress: string;
    totalToken: number;
    amount: number;
    currency: string;
}
