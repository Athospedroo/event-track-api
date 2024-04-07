import { CreateUsersByFileUseCaseCommonInterface } from "../../../domain/usecase/common/user"
import { newDate } from "../../internal/common/date"
import { generateUUID } from "../../internal/common/uuid"

class CreateUsersByFileUseCaseCommon implements CreateUsersByFileUseCaseCommonInterface {
  newDate(): Date {
    return newDate()
  }

  generateUUID(): string {
    return generateUUID()
  }
}

export {
  CreateUsersByFileUseCaseCommon
}