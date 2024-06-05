import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from "express";
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {

 constructor(private readonly UserService: UserService){}
     @Get('/all-user')
     async getAllUser(@Req() request:Request, @Res() response:Response ):Promise<any>{
          const result =  await this.UserService.getAllUser()
          return response.status(200).json({
               status: "Ok!",
               message: "Successfully fetch data!",
               result: result 
          })
     }

     @Post('/create-user')
     async postUser(@Body() postData: User):Promise<User>{
          return this.UserService.createUser(postData)
     }

     @Get(':id')
     async getUser(@Param('id') id:number):Promise<User | null>{
          return this.UserService.getUser(id)
     }

     @Delete(':id')
     async deleteUser(@Param('id') id:number):Promise<User>{
          return this.UserService.deleteUser(id)
     }

     @Patch(':id')
     async updateUser(@Param('id') id: number,@Body() data: User): Promise<User> {
       return this.UserService.updateUser(id,data);
     }

}

