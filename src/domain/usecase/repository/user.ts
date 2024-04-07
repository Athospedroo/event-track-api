import { UserEntity } from "../../entity/user"

interface CreateUsersByFileUseCaseRepositoryInterface {
    createUsersByFile(user: UserEntity): Promise<void>
}

interface ListUsersWithPaginationUseCaseRepositoryInterface {
    listUsersWithPagination(page: number, limit: number): Promise<UserEntity[] | null>
    countUsers(): Promise<number>
}

interface GetUserUseCaseRepositoryInterface {
    getUser(ID: string): Promise<UserEntity | null>
}

export {
    CreateUsersByFileUseCaseRepositoryInterface,
    ListUsersWithPaginationUseCaseRepositoryInterface,
    GetUserUseCaseRepositoryInterface
}