import { PrismaService } from '../../../prisma.service';
import { User } from './user.interface';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUser(): Promise<User[] | any>;
    getUser(id: number): Promise<any | null>;
    createUser(data: User): Promise<User | any>;
    updateUser(id: number, data: User): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
