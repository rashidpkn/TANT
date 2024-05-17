import { Module } from '@nestjs/common';
import { NowpaymentsService } from './nowpayments.service';
import { NowpaymentsController } from './nowpayments.controller';

@Module({
  controllers: [NowpaymentsController],
  providers: [NowpaymentsService],
})
export class NowpaymentsModule {}
