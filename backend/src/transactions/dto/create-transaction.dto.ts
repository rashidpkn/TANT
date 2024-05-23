import { isBtcAddress, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {

    @IsNotEmpty()
    @IsString()
    walletAddress : string

    @IsNotEmpty()
    @IsNumber()
    totalToken:number

    @IsNumber()
    amount:number

    
@IsString()
    currency:string

}
