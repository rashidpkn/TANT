
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Transactions extends Model {
    
    @Column({allowNull:false})
    walletAddress: string

    @Column({allowNull:false,type:DataType.FLOAT})
    totalToken:number

    @Column({allowNull:false,type:DataType.FLOAT,defaultValue:0})
    amount:number

    @Column({allowNull:false,defaultValue:'usd'})
    currency: string
    
}
