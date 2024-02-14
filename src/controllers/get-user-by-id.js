import { GetUserByIdUseCase } from '../use-cases/get-user-by-id.js'
import { serverError } from './helpers.js'

export class GetUserByIdController {
    async execute(httpRequest) {
        try {
            const { userId } = httpRequest.params

            const getUserByUseCase = new GetUserByIdUseCase()

            const user = await getUserByUseCase.execute(userId)

            return {
                statusCode: 200,
                body: user,
            }
        } catch (error) {
            return serverError()
        }
    }
}
