import CreateUserAdapter from "adapters/create-user.adapter";
import FindUserAdapter from "adapters/find-user.adapter";
import CreateUser from "core/usuario/service/create-user";
import FindUsers from "core/usuario/service/find-all";
import { Elysia } from "elysia";
import UserPgRepositoryImpl from "external/prisma/user-pg.repository.impl";

const app = new Elysia();

// Registrar rotas

const user = new UserPgRepositoryImpl();

const userRepository = new CreateUser(user);
new CreateUserAdapter(app, userRepository);

const findUser = new FindUsers(user);
new FindUserAdapter(app, findUser);

app.listen(3000);

console.log("Server is running on port 3000");
