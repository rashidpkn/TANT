import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transactions } from 'src/model/Transactions.model';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    try {
        Transactions.create({...createTransactionDto})
        return {
          message:"Created"
        }
    } catch (error) {
      throw error  
    }
    
  }

  @Get()
  async findAll() {
    try {
      return await Transactions.findAll({})
      
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return  await Transactions.findOne({where:{id}})
    } catch (error) {
      throw error
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    try {
      await Transactions.update({...updateTransactionDto},{where:{id}})
      return {
        message:'Updated'
      }
    } catch (error) {
      throw error
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await Transactions.destroy({where:{id}})
      return {
        message:'Deleted'
      }
    } catch (error) {
      throw error
    }
  }
}
