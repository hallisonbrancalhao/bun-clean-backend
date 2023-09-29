import { User } from "@prisma/client";
import UserRepository from "core/usuario/service/user.repository";

export default class MockUserRepositoryImpl implements UserRepository {
  private readonly users: User[] = [];

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random() };
    this.users.push(newUser);
    return newUser;
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) ?? null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}
