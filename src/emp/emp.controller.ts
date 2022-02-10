import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EmpService } from './emp.service';
import { CheckInTodoDto, CheckOutTodoDto } from './dto/CheckInTodoDto';

@Controller()
export class EmpController {
  constructor(private readonly service: EmpService) {}

  @Post('checkin')
  async checkIn( @Body()    CheckInTodoDto:CheckInTodoDto){
       return await this.service.checkIn(CheckInTodoDto)
  }

  @Patch('checkout/:id')
  async checkOut(@Param('id') id , @Body() CheckOutTodoDto:CheckOutTodoDto){
      
      return await this.service.checkOut(CheckOutTodoDto ,id)
  }

  @Get('singleUser/:id')
  async findsingleuser(@Param('id')id){
    return await this.service.findSingleUser(id)
    
  }




















}
