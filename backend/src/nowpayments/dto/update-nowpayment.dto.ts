import { PartialType } from '@nestjs/mapped-types';
import { CreateNowpaymentDto } from './create-nowpayment.dto';

export class UpdateNowpaymentDto extends PartialType(CreateNowpaymentDto) {}
