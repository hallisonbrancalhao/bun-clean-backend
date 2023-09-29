import FindUsers from "core/usuario/service/find-all";
import Elysia from "elysia";

export default class FindUserAdapter {
  constructor(readonly server: Elysia, readonly useCase: FindUsers) {
    server.get("/users", async () => {
      return useCase.exec();
    });
  }
}
