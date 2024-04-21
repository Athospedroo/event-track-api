import { ListUserCallAttendanceAbsentUseCase, ListUserCallAttendancePresentUseCase, ListUsersCallAttendanceUseCase, RegisterUserCallAttendanceUseCase, RemoveUserCallAttendanceUseCase } from "../../../domain/usecase/callAttendance"
import { ListUserCallAttendanceAbsentUseCaseRequest, ListUserCallAttendanceAbsentUseCaseResponse, ListUserCallAttendancePresentUseCaseRequest, ListUserCallAttendancePresentUseCaseResponse, ListUsersCallAttendanceUseCaseRequest, ListUsersCallAttendanceUseCaseResponse, RegisterUserCallAttendanceUseCaseRequest, RegisterUserCallAttendanceUseCaseResponse, RemoveUserCallAttendanceUseCaseRequest, RemoveUserCallAttendanceUseCaseResponse } from "../../../domain/usecase/ucio/callAttendance"
import { ListUserCallAttendanceAbsentUseCaseRepository, ListUserCallAttendancePresentUseCaseRepository, ListUsersCallAttendanceuseCaseRepository, RegisterUserCallAttendanceUseCaseRepository, RemoveUserCallAttendanceUseCaseRepository } from "../../../infra/provider/repository/callAttendance"
import { ListUserCallAttendanceAbsentUseCaseValidate, ListUserCallAttendancePresentUseCaseValidate, ListUsersCallAttendanceuseCaseValidate, RegisterUserCallAttendanceUseCaseValidate, RemoveUserCallAttendanceUseCaseValidate } from "../../../infra/provider/validate/callAttendance"

class RegisterUserCallAttendanceController {
  async registerUserCallAttendance(args: any): Promise<RegisterUserCallAttendanceUseCaseResponse> {
    const { userAdmID, userID, presence, badgeChecked, eventID,  justifieldAbsentType } = args
    const ucReq = new RegisterUserCallAttendanceUseCaseRequest(userID, userAdmID, eventID , presence, badgeChecked, justifieldAbsentType)

    const validate = new RegisterUserCallAttendanceUseCaseValidate()
    const repository = new RegisterUserCallAttendanceUseCaseRepository()

    const usecase = new RegisterUserCallAttendanceUseCase(validate, repository)

    return await usecase.registerUserCallAttendance(ucReq)
  }
}

class RemoveUserCallAttendanceController {
  async removeUserCallAttendance(args: any): Promise<RemoveUserCallAttendanceUseCaseResponse> {
    const { userID, userAdmID, updatedAt } = args

    const ucReq = new RemoveUserCallAttendanceUseCaseRequest(userID, userAdmID, updatedAt)

    const validate = new RemoveUserCallAttendanceUseCaseValidate()
    const repository = new RemoveUserCallAttendanceUseCaseRepository()

    const usecase = new RemoveUserCallAttendanceUseCase(validate, repository)

    return await usecase.removeUserCallAttendance(ucReq)
  }
}

class ListUserCallAttendancePresentController {
  async listUserCallAttendancePresent(args: any): Promise<ListUserCallAttendancePresentUseCaseResponse> {
    const { voiceType, page, initialDate, finalDate } = args
    const ucReq = new ListUserCallAttendancePresentUseCaseRequest(voiceType, page, initialDate, finalDate)

    const validate = new ListUserCallAttendancePresentUseCaseValidate()
    const repository = new ListUserCallAttendancePresentUseCaseRepository()

    const usecase = new ListUserCallAttendancePresentUseCase(validate, repository)

    return await usecase.listUserCallAttendancePresent(ucReq)
  }
}

class ListUserCallAttendanceAbsentController {
  async listUserCallAttendanceAbsent(args: any):Promise<ListUserCallAttendanceAbsentUseCaseResponse> {
    const { voiceType, page, initialDate, finalDate } = args

    const ucReq = new ListUserCallAttendanceAbsentUseCaseRequest(voiceType, page, initialDate, finalDate)

    const validate = new ListUserCallAttendanceAbsentUseCaseValidate()
    const repository = new ListUserCallAttendanceAbsentUseCaseRepository()

    const usecase = new ListUserCallAttendanceAbsentUseCase(validate, repository)

    return await usecase.listUserCallAttendanceAbsent(ucReq)
  }
}

class ListUsersCallAttendanceController {
  async listUsersCallAttendance(args: any): Promise<ListUsersCallAttendanceUseCaseResponse> {
    const { voiceType, eventID } = args

    const ucReq = new ListUsersCallAttendanceUseCaseRequest(voiceType, eventID)

    const validate = new ListUsersCallAttendanceuseCaseValidate()
    const repository = new ListUsersCallAttendanceuseCaseRepository()

    const usecase = new ListUsersCallAttendanceUseCase(validate, repository)
    console.log('usecase', await usecase.listUsersCallAttendance(ucReq))
    return await usecase.listUsersCallAttendance(ucReq)
  }
}

export {
  RegisterUserCallAttendanceController,
  RemoveUserCallAttendanceController,
  ListUserCallAttendancePresentController,
  ListUserCallAttendanceAbsentController,
  ListUsersCallAttendanceController
}