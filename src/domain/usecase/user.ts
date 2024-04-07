import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { CreateUsersByFileUseCaseRepositoryInterface, GetUserUseCaseRepositoryInterface, ListUsersWithPaginationUseCaseRepositoryInterface } from "./repository/user"
import { CreateUsersByFileUseCaseRequest, CreateUsersByFileUseCaseResponse, GetUserUseCaseRequest, GetUserUseCaseResponse, ListUsersWithPaginationUseCaseRequest, ListUsersWithPaginationUseCaseResponse } from "./ucio/user"
import fs from 'fs'
import csv from 'csv-parser'
import { Transform, Writable } from 'stream'
import { CreateUsersByFileUseCaseValidateInterface, GetUserUseCaseValidateInterface, ListUsersWithPaginationUseCaseValidateInterface } from "./validate/user"
import { UserEntity } from "../entity/user"
import { CreateUsersByFileUseCaseCommonInterface } from "./common/user"
import { ACTIVE, NOT_DELETED } from "../constants/util"

class CreateUsersByFileUseCase {
  public common: CreateUsersByFileUseCaseCommonInterface
  public validate: CreateUsersByFileUseCaseValidateInterface
  public repository: CreateUsersByFileUseCaseRepositoryInterface

  constructor(
    common: CreateUsersByFileUseCaseCommonInterface,
    validate: CreateUsersByFileUseCaseValidateInterface,
    repository: CreateUsersByFileUseCaseRepositoryInterface,
  ) {
    this.validate = validate
    this.repository = repository
    this.common = common
  }

  async createUsersByFile(req: CreateUsersByFileUseCaseRequest): Promise<CreateUsersByFileUseCaseResponse> {
    try {
      const { file } = req
      const errorMessage = await this.validate.createUsersByFile(file.path)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new CreateUsersByFileUseCaseResponse(new PreconditionError(errorMessage))
      } else {
        const readbleStram = fs.createReadStream(file.path)
        const tranformStreamToObject = csv({ headers: false })
        const tranformStramToString = new Transform({
          objectMode: true,
          transform(chunk, encoding, callbak) {
            callbak(null, JSON.stringify(chunk))
          }
        })
        const writableStream = new Writable({
          write: async (chunk, encoding, callbak) => {
            try {
              const string = chunk.toString()
              const data = JSON.parse(string)
              const [badgeNumber, name, churchName, areaNumber, phone, memberCard, voiceType, userType, shirtSize] = data
              const now = this.common.newDate()
              const uuid = this.common.generateUUID()
              const entityUser = new UserEntity(uuid, name, "", "", voiceType, memberCard || '', badgeNumber, churchName || '', areaNumber || '', phone || '', shirtSize, userType, now, ACTIVE, NOT_DELETED, now, now)
              await this.repository.createUsersByFile(entityUser)

            } catch (error: any) {
              console.log(TAG_INTERNAL_SERVER_ERROR, error)
              return new CreateUsersByFileUseCaseResponse(new InternalServerError(error.message))
            }
            finally {
              callbak()
            }
          }
        })
        console.log('processamento iniciado!', Date())
        readbleStram
          .pipe(tranformStreamToObject)
          .pipe(tranformStramToString)
          .pipe(writableStream)
          .on('close', () => console.log('processamento finalizado!', Date()))

        return new CreateUsersByFileUseCaseResponse(null)
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new CreateUsersByFileUseCaseResponse(new InternalServerError(error.message))
    }
  }
}

class ListUsersWithPaginationUseCase {
  public validate: ListUsersWithPaginationUseCaseValidateInterface
  public repository: ListUsersWithPaginationUseCaseRepositoryInterface

  constructor(
    validate: ListUsersWithPaginationUseCaseValidateInterface,
    repository: ListUsersWithPaginationUseCaseRepositoryInterface
  ) {
    this.validate = validate
    this.repository = repository
  }
  async listUsersUsers(req: ListUsersWithPaginationUseCaseRequest): Promise<ListUsersWithPaginationUseCaseResponse> {
    try {
      const errorMessage = this.validate.listUsersWithPagination(req.page, req.limit)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new ListUsersWithPaginationUseCaseResponse(null, null, new PreconditionError(errorMessage))
      } else {
        const users = await this.repository.listUsersWithPagination(req.page, req.limit)
        const count = await this.repository.countUsers()

        return new ListUsersWithPaginationUseCaseResponse(users, count, null)
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new ListUsersWithPaginationUseCaseResponse(null, null, new InternalServerError(error.message))
    }
  }
}

class GetUserUseCase {
  validate: GetUserUseCaseValidateInterface
  repository: GetUserUseCaseRepositoryInterface

  constructor(validate: GetUserUseCaseValidateInterface,
    repository: GetUserUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async getUserUseCase(req: GetUserUseCaseRequest): Promise<GetUserUseCaseResponse> {
    try {
      const errorMessage = this.validate.getUserUser(req.ID)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new GetUserUseCaseResponse(null, new PreconditionError(errorMessage))
      } else {
        const user = await this.repository.getUser(req.ID)

        return new GetUserUseCaseResponse(user, null)
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new GetUserUseCaseResponse(null, new InternalServerError(error.message))
    }
  }
}

export {
  CreateUsersByFileUseCase,
  ListUsersWithPaginationUseCase,
  GetUserUseCase
}