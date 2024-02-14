import { CreateUserUseCase } from '../use-cases/create-user.js'
import { badRequest } from './helpers.js'
import validator from 'validator'

export class CreateUserController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.body
            // Validar a requisição como campos obrigatórios, tamanho de senha, e se email é válido.
            const requireFields = [
                'first_name',
                'last_name',
                'email',
                'password',
            ]
            for (const field of requireFields) {
                if (!params[field] || params[field].trim().length == 0) {
                    return badRequest(`Missing param: ${field}`)
                }
            }

            const passwordValid = params.password.length < 6
            if (passwordValid) {
                return badRequest('Password must be at least 6 characters')
            }

            const emailIsValid = validator.isEmail(params.email)
            if (!emailIsValid) {
                return badRequest('Invalid e-mail. Prease provide a valid one.')
            }

            // Chamar o use case
            const createUserUseCase = new CreateUserUseCase()
            const createUser = await createUserUseCase.execute(params)

            // Retornar a resposta para o usuário (status code)
            return {
                statusCode: 201,
                body: createUser,
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                body: {
                    errorMessage: 'Internal servidor error',
                },
            }
        }
    }
}
