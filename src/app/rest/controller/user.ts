import { Request, Response } from "express"
import { CreateUsersByFileUseCaseRequest } from "../../../domain/usecase/ucio/user"
import { CreateUsersByFileUseCaseRepository } from "../../../infra/provider/repository/user"
import { CreateUsersByFileUseCase } from "../../../domain/usecase/user"
import { CreateUsersByFileUseCaseValidate } from "../../../infra/provider/validate/user"
import { SuccessResponse } from "../response/response"
import { CreateUsersByFileUseCaseCommon } from "../../../infra/provider/common/user"

class CreateUsersByFileController {
  async createUsersByFile(req: Request, res: Response): Promise<void> {
    const file = req.file
    
    const ucReq = new CreateUsersByFileUseCaseRequest(file)

    const common = new CreateUsersByFileUseCaseCommon()
    const validate = new CreateUsersByFileUseCaseValidate()
    const repository = new CreateUsersByFileUseCaseRepository()

    const usecase = new CreateUsersByFileUseCase(common, validate, repository)

    const ucRes =  await usecase.createUsersByFile(ucReq)

    return new SuccessResponse().success(res, ucRes)
  } 
}

export {
  CreateUsersByFileController
}