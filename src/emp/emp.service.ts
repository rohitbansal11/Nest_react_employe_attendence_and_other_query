import { Injectable } from '@nestjs/common';
import { ModuleFactory } from '@nestjs/core/injector/compiler';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { retry } from 'rxjs';
import { CheckInTodoDto, CheckOutTodoDto } from './dto/CheckInTodoDto';
import { EmpDocument ,Emp } from './scheema/EmpScheema';

@Injectable()
export class EmpService {
    constructor(
        @InjectModel(Emp.name) private readonly modal :Model<EmpDocument> ){}


async checkIn(body:CheckInTodoDto){
 let data = await new this.modal({
        userId:body?.userId,
        empId:body?.empId,
        name:body?.name,
        checkIn:body?.checkIn,
        date:body?.date,
        checkOut:''
    }).save()
   let sune={
    id:data._id,
    checkIn:data.checkIn

   }
  
    
    return sune

}
async checkOut(body:CheckOutTodoDto ,id){
    let data={
        id:id,
        datavalue:body
    }
  let docs= await this.modal.findByIdAndUpdate({_id:id}, {checkOut:body.checkOut})
                          
    if (!docs){
       
        return {massage:'Something Went WWronge Try Again'}

    }
    else{
        //console.log("Updated User : ", docs);
        return {massage:'Updated'}
    }

  

    
}

async findSingleUser(id){
  let data= await this.modal.find({userId:id})
  if(!data){
      return {massage:'SomeThing Went Wronge'}
  }else{
     
    return data

  }
 


}
















}
