import { Controller, Post , Body, Get, Param } from '@nestjs/common';
import { MassageService } from './massage.service';
import { MassageDto } from './msg.dto';

@Controller()
export class MassageController {

    constructor (private readonly service:MassageService){}


    @Post('sendmsg')
    async sendMsg(@Body() MassageDto:MassageDto){

        return await this.service.sendMsg(MassageDto)
        

    }
    @Get('getmsg')
    async getAllMsg(){
        return await this.service.getMsg()

    }

    @Get('singlemsg/:id')
    async getSingleMsg(@Param('id') id){

        return await this.service.getSingleMsg(id)

    }

















}
