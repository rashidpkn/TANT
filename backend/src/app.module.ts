import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NowpaymentsModule } from './nowpayments/nowpayments.module';

@Module({
  imports: [  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..','..', 'frontend' , 'dist'),
  }),
  DatabaseModule,TransactionsModule, NowpaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
