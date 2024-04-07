import { ACTIVE, MAX_DATA_PAGE, NOT_DELETED } from "../../../../domain/constants/util"
import { UserEntity } from "../../../../domain/entity/user"
import { Connection } from "./connection"
import { UserModel } from "./model/user"
import { toUserEntity, toUserModel } from "./transformer/user"

async function createUser(e: UserEntity): Promise<UserEntity> {
    const repository = await Connection.getRepository(UserModel)
    const model = toUserModel(e)
    const result = await repository.save(model)

    return toUserEntity(result)
}

async function listUsersByPagination(page: number, limit: number): Promise<UserEntity[] | null> {
    const options: any = { where: { isDeleted: NOT_DELETED, isActive: ACTIVE }, order: { createdAt: 'desc' } }

    if (page || page === 0) {
        options.skip = page * MAX_DATA_PAGE
        options.take = limit ? limit : MAX_DATA_PAGE
    }

    const repository = await Connection.getRepository(UserModel)
    const users: UserModel[] = await repository.find(options)
    return users.length > 0 ? users.map(user => toUserEntity(user)) : null
}

async function countUsers(): Promise<number> {
    const repository = await Connection.getRepository(UserModel)

    return repository.countBy({ isDeleted: NOT_DELETED })
}

async function getUser(ID: string): Promise<UserEntity | null> {
    const repository = await Connection.getRepository(UserModel)

    const user = await repository.findOne({where: { ID, isActive: ACTIVE, isDeleted: NOT_DELETED }})

    return user ? toUserEntity(user) : null
}

export {
    createUser,
    listUsersByPagination,
    countUsers,
    getUser
}