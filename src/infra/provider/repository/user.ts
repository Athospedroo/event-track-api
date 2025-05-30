import { CreateUsersByFileUseCaseRepositoryInterface, GetUserByQRCodeIDUseCaseRepositoryInterface, GetUserUseCaseRepositoryInterface, ListUsersWithPaginationUseCaseRepositoryInterface } from "../../../domain/usecase/repository/user"
import { UserEntity } from '../../../domain/entity/user'
import { countUsers, createUser, getUser, getUserByQRCodeID, listUsersByPagination } from "../../internal/database/postdresql/user"

class CreateUsersByFileUseCaseRepository implements CreateUsersByFileUseCaseRepositoryInterface {
  async createUsersByFile(user: UserEntity): Promise<void> {
    await createUser(user)
  }
}

class ListUsersWithPaginationUseCaseRepository implements ListUsersWithPaginationUseCaseRepositoryInterface {
  async listUsersWithPagination(page: number, limit: number): Promise<UserEntity[] | null> {
    return listUsersByPagination(page, limit)
  }

  async countUsers(): Promise<number> {
    return countUsers()
  }
}

class GetUserUseCaseRepository implements GetUserUseCaseRepositoryInterface {
  async getUser(ID: string): Promise<UserEntity | null> {
    return await getUser(ID)
  }
}

class GetUserByQRCodeIDUseCaseRepository implements GetUserByQRCodeIDUseCaseRepositoryInterface {
  async getUserByQRCodeID(qrcodeID: string): Promise<UserEntity | null> {
    return await getUserByQRCodeID(qrcodeID)
  }
}

export {
  CreateUsersByFileUseCaseRepository,
  ListUsersWithPaginationUseCaseRepository,
  GetUserUseCaseRepository,
  GetUserByQRCodeIDUseCaseRepository
}