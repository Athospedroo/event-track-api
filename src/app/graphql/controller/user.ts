import { GetUserByQRCodeIDUseCaseRequest, GetUserByQRCodeIDUseCaseResponse, GetUserUseCaseRequest, GetUserUseCaseResponse, ListUsersWithPaginationUseCaseRequest, ListUsersWithPaginationUseCaseResponse } from "../../../domain/usecase/ucio/user"
import { GetUserByQRCodeIDUseCase, GetUserUseCase, ListUsersWithPaginationUseCase } from "../../../domain/usecase/user"
import { GetUserByQRCodeIDUseCaseRepository, GetUserUseCaseRepository, ListUsersWithPaginationUseCaseRepository } from "../../../infra/provider/repository/user"
import { GetUserByQRCodeIDUseCaseValidate, GetUserUseCaseValidate, ListUsersWithPaginationUseCaseValidate } from "../../../infra/provider/validate/user"

class ListUsersWithPaginationController {
  async listUsersWithPagination(args: any): Promise<ListUsersWithPaginationUseCaseResponse> {
    const { page, limit } = args

    const ucReq = new ListUsersWithPaginationUseCaseRequest(page, limit)

    const validate = new ListUsersWithPaginationUseCaseValidate()
    const repository = new ListUsersWithPaginationUseCaseRepository()

    const usecase = new ListUsersWithPaginationUseCase(validate, repository)

    return await usecase.listUsersUsers(ucReq)
  }
}

class GetUserController {
  async getUser(args: any): Promise<GetUserUseCaseResponse> {
    const { ID } = args

    const ucReq = new GetUserUseCaseRequest(ID)

    const validate = new GetUserUseCaseValidate()
    const repository = new GetUserUseCaseRepository()

    const usecase = new GetUserUseCase(validate, repository)

    return await usecase.getUserUseCase(ucReq)
  }
}

class GetUserByQRCodeIDController {
  async getUserByQRCodeID(args: any): Promise<GetUserByQRCodeIDUseCaseResponse> {
    console.log("controller qrcodeID", args)
    const { qrCodeID } = args

    const ucReq = new GetUserByQRCodeIDUseCaseRequest(qrCodeID)

    const validate = new GetUserByQRCodeIDUseCaseValidate()
    const repository = new GetUserByQRCodeIDUseCaseRepository()

    const usecase = new GetUserByQRCodeIDUseCase(validate, repository)

    return await usecase.getUserByQRCodeID(ucReq)
  }
}

export {
  ListUsersWithPaginationController,
  GetUserController,
  GetUserByQRCodeIDController
}