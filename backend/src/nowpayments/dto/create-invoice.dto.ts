import { IsEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateInvoiceDto {

    @IsNumber()
    price_amount:number

    @IsString()
    price_currency:string = 'usd'

    @IsString()
    order_id:string

    @IsString()
    order_description:string

    @IsUrl()
    success_url:string

    @IsUrl()
    cancel_url:string

}