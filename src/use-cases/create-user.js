import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js'

export class CreateUserCase {
    async execute(createUserParams) {
        // TODO: Verificar se o e-mail já está em uso.

        // Gerar id do usuário.
        const userId = uuidv4()

        // Criptografar senha do usuário.
        const hashedPassword = await bcrypt.hash(createUserParams.password, 10)

        // Inserir usuário no banco de dados.
        const user = {
            ...createUserParams,
            id: userId,
            password: hashedPassword,
        }
        // Chamar o repositório
        const PostgresCreateUserRepository = new PostgresCreateUserRepository()

        const createUser = await PostgresCreateUserRepository.execute(user)

        return createUser
    }
}