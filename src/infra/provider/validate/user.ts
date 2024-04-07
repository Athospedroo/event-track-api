import { CreateUsersByFileUseCaseValidateInterface, GetUserUseCaseValidateInterface, ListUsersWithPaginationUseCaseValidateInterface } from "../../../domain/usecase/validate/user"
import { checkStringEmpty } from "./validate"

class CreateUsersByFileUseCaseValidate implements CreateUsersByFileUseCaseValidateInterface {
  async createUsersByFile(file: any): Promise<string | null> {
    return null
  }
}

class ListUsersWithPaginationUseCaseValidate implements ListUsersWithPaginationUseCaseValidateInterface {
  listUsersWithPagination(page: number, limit: number): string | null {
    return null
  }
}

class GetUserUseCaseValidate implements GetUserUseCaseValidateInterface {
  getUserUser(ID: string): string | null {
    if (checkStringEmpty(ID)) 'O ID do usuário não pode ser vazio'

    return null
  }
}

export {
  CreateUsersByFileUseCaseValidate,
  ListUsersWithPaginationUseCaseValidate,
  GetUserUseCaseValidate
}