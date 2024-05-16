import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..','..', 'frontend' , 'dist'),
  }),
  DatabaseModule,TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
