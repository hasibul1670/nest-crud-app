import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../prisma.service';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<User[] | any> {
    return this.prisma.user.findMany();
  }

  async getUser(id: number): Promise<any | null> {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }

  async createUser(data: User): Promise<User | any> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(id: number, data: User): Promise<any> {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: data,
    });
  }

  async deleteUser(id: number): Promise<any> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
