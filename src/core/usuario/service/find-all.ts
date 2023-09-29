import UseCase from "core/shared/use-case";
import UserRepository from "./user.repository";
import { User } from "@prisma/client";

export default class FindUsers implements UseCase<void, User[]> {
  constructor(readonly repository: UserRepository) {}

  exec(input: void): Promise<User[]> {
    return this.repository.findAll();
  }
}
