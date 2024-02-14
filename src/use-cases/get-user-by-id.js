import { PostgresGetUserByRepository } from '../repositories/postgres/get-user-by-id.js'

export class GetUserByUseCase {
    async execute() {
        const getUserByIdRepository = new PostgresGetUserByRepository()
        const user = await getUserByIdRepository.execute(userId)
        return user
    }
}
