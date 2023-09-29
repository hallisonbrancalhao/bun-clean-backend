import UseCase from "core/shared/use-case";
import UserRepository from "./user.repository";

export type CreateUserDto = {
  name: string;
  email: string;
  senha: string;
};

export default class CreateUser implements UseCase<CreateUserDto, void> {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(input: CreateUserDto): Promise<void> {
    const { name, email, senha } = input;

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new Error("Email já cadastrado");
    }

    await this.userRepository.create({ name, email, senha });
  }
}
