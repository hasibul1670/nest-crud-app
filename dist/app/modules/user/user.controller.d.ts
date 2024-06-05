import { Request, Response } from "express";
import { User } from './user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    getAllUser(request: Request, response: Response): Promise<any>;
    postUser(postData: User): Promise<User>;
    getUser(id: number): Promise<User | null>;
    deleteUser(id: number): Promise<User>;
    updateUser(id: number, data: User): Promise<User>;
}
