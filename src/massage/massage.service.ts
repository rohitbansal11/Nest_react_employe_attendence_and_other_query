import { Injectable } from '@nestjs/common';
import { MsgDocument , Msg } from './scheema/massage.Scheema';
import { Model } from 'mongoose';
import { MassageDto } from './msg.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MassageService {
    constructor(@InjectModel(Msg.name) private readonly model:Model<MsgDocument>){}



async sendMsg(MassageDto:MassageDto){

}

async getMsg(){
    
}

async getSingleMsg(id){

}










}
