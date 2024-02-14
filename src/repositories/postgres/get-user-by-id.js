import { PostgresHelper } from '../../db/postgres/helper.js'
import {} from './create-user'

export class PostgresGetUserByRepository {
    async execute(userId) {
        const user = await PostgresHelper.query(
            'SELECT * FROM users WHERE id = $1',
            [userId]
        )
        return user[0]
    }
}
