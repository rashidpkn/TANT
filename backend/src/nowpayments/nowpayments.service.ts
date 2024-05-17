import { Injectable } from '@nestjs/common';
import { CreateNowpaymentDto } from './dto/create-nowpayment.dto';
import { UpdateNowpaymentDto } from './dto/update-nowpayment.dto';

@Injectable()
export class NowpaymentsService {
  create(createNowpaymentDto: CreateNowpaymentDto) {
    return 'This action adds a new nowpayment';
  }

  findAll() {
    return `This action returns all nowpayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nowpayment`;
  }

  update(id: number, updateNowpaymentDto: UpdateNowpaymentDto) {
    return `This action updates a #${id} nowpayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} nowpayment`;
  }
}
