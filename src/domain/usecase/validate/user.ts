interface CreateUsersByFileUseCaseValidateInterface {
  createUsersByFile(file: any): Promise<string | null>
}

interface ListUsersWithPaginationUseCaseValidateInterface {
  listUsersWithPagination(page: number, limit: number): string | null
}

interface GetUserUseCaseValidateInterface {
  getUserUser(ID: string): string | null
}

export {  
  CreateUsersByFileUseCaseValidateInterface,
  ListUsersWithPaginationUseCaseValidateInterface,
  GetUserUseCaseValidateInterface
}