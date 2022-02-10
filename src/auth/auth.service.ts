import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, modelNames } from 'mongoose';
import { Auth, AuthDocument } from './scheema/authscheema';
import { BaseTodoDto } from './dto/Basedto';
import * as bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import { Login } from './dto/Login';

import {JwtService} from "@nestjs/jwt";
import { identity } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly model: Model<AuthDocument>, private jwtService: JwtService
  )  {}

//   async create(createTodoDto: CreateTodoDto): Promise<Todo> {
//     return await new this.model({
//       ...createTodoDto,
//       createdAt: new Date(),
//     }).save();
//   }


async registerUser(body:BaseTodoDto){
    const hashedPassword = await bcrypt.hash(body?.password, 12);
 
    let dataFind=   await this.model.findOne({email:body?.email})
   
 
    
        if(dataFind){
          return {massage:'user Already Exit'}


        }else{
          
          let saveUser= await new this.model({
            name:body?.name,
            password:hashedPassword,
            role:body?.role,
            position:body?.position,
            email:body?.email,
            empId:nanoid()
           }).save()
           const jwt = await this.jwtService.sign({id: saveUser._id});
    
           let datavalue={
            id:saveUser._id,
            email:saveUser?.email,
            position:saveUser?.position,
            empId:saveUser?.empId,
            role:saveUser?.role,
            name:saveUser?.role,
            token:jwt
    
          }
    
           return datavalue
        }
      
      
     
  
   
    

}


async loginPage(body:Login){
   
  let data=   await this.model.findOne({email:body?.email})


  if(!data){
      return 'no user found'

  }else{
       const isMatch = await bcrypt.compare(body?.password, data?.password);
       if(!isMatch){
           return 'password not match'
       }else{
            const jwt = await this.jwtService.sign({id: data._id});
            let datavalue={
              id:data._id,
              email:data?.email,
              position:data?.position,
              empId:data?.empId,
              role:data?.role,
              name:data?.role,
              token:jwt

            }
           return datavalue
       }
      

  }
    
    
    

    
}


async allUser(){
  let data= await this.model.find({})
  if(!data){
    return {massage:'Something Went wronge'}

  }else{
    return data

  }
}








}
