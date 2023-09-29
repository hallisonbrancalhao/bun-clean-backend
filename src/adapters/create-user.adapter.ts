import User from "core/usuario/model/user.entity";
import CreateUser, { CreateUserDto } from "core/usuario/service/create-user";
import Elysia from "elysia";

export default class CreateUserAdapter {
  constructor(readonly server: Elysia, readonly useCase: CreateUser) {
    server.post("/users", async ({ body }) => {
      const { nome, email, senha } = body as Partial<User>;

      return await useCase.exec({ nome, email, senha });
    });
  }
}
