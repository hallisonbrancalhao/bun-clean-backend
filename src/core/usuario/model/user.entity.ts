export default interface User {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  criadoEm?: Date;
  atualizadoEm?: Date;
}
