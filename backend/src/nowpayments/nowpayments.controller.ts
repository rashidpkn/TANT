import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { NowpaymentsService } from './nowpayments.service';
import { CreateNowpaymentDto } from './dto/create-nowpayment.dto';
import { UpdateNowpaymentDto } from './dto/update-nowpayment.dto';
import { nowPaymentApi } from 'src/util/nowPaymentApi';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('nowpayments')
export class NowpaymentsController {
  constructor(private readonly nowpaymentsService: NowpaymentsService) {}

  @Get("api-status")
  async apiStatus(){
    try {
    
      const {data} = await nowPaymentApi.get('status');
        return data; 
    } catch (error) {
      console.error(error); 
        return { error: error.message }; 
    }
  }

  @Post('auth')
  async Auth(@Body()  body:{}){
    try {
      const {email,password}:{email?:string,password?:string} = body
      if(!email || !password){
          throw new BadRequestException('Email and password are mandiatory')
      }
      const {data} = await nowPaymentApi.post('/auth',JSON.stringify({email,password}))
      return data
    } catch (error) {
        throw error
    }
  }

  @Get('currencies')
    async  currencies(){
      try {
        const res = await nowPaymentApi.get('/currencies?fixed_rate=true')
        return res.data
      } catch (error) {
        throw error
      }
    }

    @Post('invoice')
    async createInvoice(@Body() createInvoiceDto: CreateInvoiceDto){
      try {
      
        const {data} = await nowPaymentApi.post('/invoice',createInvoiceDto)
        return data.invoice_url
      } catch (error) {
        throw error
      }
    }

  @Post()
  create(@Body() createNowpaymentDto: CreateNowpaymentDto) {
    return this.nowpaymentsService.create(createNowpaymentDto);
  }

  
}
