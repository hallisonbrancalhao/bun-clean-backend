import { PrismaClient, User } from "@prisma/client";
import UserRepository from "core/usuario/service/user.repository";

export default class UserPgRepositoryImpl implements UserRepository {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
