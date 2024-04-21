import { addHours, addMinutes } from "date-fns"
import { PRESENCE } from "../constants/util"
import { CallAttendanceEntity, ListUsersCallAttendancePresenceOrAbsentFilter, RegisterUserCallAttendanceFilter } from "../entity/callAttendance"
import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { ListUserCallAttendanceAbsentUseCaseRepositoryInterface, ListUserCallAttendancePresentUseCaseRepositoryInterface, ListUsersCallAttendanceUseCaseRepositoryInterface, RegisterUserCallAttendanceUseCaseRepositoryInterface, RemoveUserCallAttendanceUseCaseRepositoryInterface } from "./repository/callAttendance"
import { ListUserCallAttendanceAbsentUseCaseRequest, ListUserCallAttendanceAbsentUseCaseResponse, ListUserCallAttendancePresentUseCaseRequest, ListUserCallAttendancePresentUseCaseResponse, ListUsersCallAttendanceUseCaseRequest, ListUsersCallAttendanceUseCaseResponse, RegisterUserCallAttendanceUseCaseRequest, RegisterUserCallAttendanceUseCaseResponse, RemoveUserCallAttendanceUseCaseRequest, RemoveUserCallAttendanceUseCaseResponse } from "./ucio/callAttendance"
import { ListUserCallAttendanceAbsentUseCaseValidateInterface, ListUserCallAttendancePresentUseCaseValidateInterface, ListUsersCallAttendanceUseCaseValidateInterface, RegisterUserCallAttendanceUseCaseValidateInterface, RemoveUserCallAttendanceUseCaseValidateInterface } from "./validate/callAttendance"

class RegisterUserCallAttendanceUseCase {
  validate: RegisterUserCallAttendanceUseCaseValidateInterface
  repository: RegisterUserCallAttendanceUseCaseRepositoryInterface

  constructor(validate: RegisterUserCallAttendanceUseCaseValidateInterface,
    repository: RegisterUserCallAttendanceUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async registerUserCallAttendance(req: RegisterUserCallAttendanceUseCaseRequest):
    Promise<RegisterUserCallAttendanceUseCaseResponse> {
    try {
      let now = new Date()
      const registerUserCallAttendanceFilter = new RegisterUserCallAttendanceFilter(null, req.userID, req.userAdmID, req.eventID, req.presence, req.badgeChecked, req.justifieldAbsentType, now, now)
      const errorMessage = await this.validate.registerUserCallAttendance(registerUserCallAttendanceFilter)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new RegisterUserCallAttendanceUseCaseResponse(new PreconditionError(errorMessage))
      } else {
        // const dateEventStarted = await this.repository.getEventStartDate(req.eventID)
        // const deadline = addMinutes(addHours(dateEventStarted as Date, 1), 15)
        // const deslocamentoBrasilia = -180
        // now = new Date(now.getTime() + deslocamentoBrasilia * 60000)
        // if (now > deadline) {
        //   console.log(TAG_PRE_CONDITION_ERROR, 'horário limite de atraso excedido!')
        //   return new RegisterUserCallAttendanceUseCaseResponse(new PreconditionError('horário limite de atraso excedido!'))
        // }
        const userIsPresence = await this.repository.getUserPresentCallAttendance(registerUserCallAttendanceFilter.userID, req.eventID)
        if (userIsPresence) {
          console.log(TAG_PRE_CONDITION_ERROR, 'O usuário já se encontra Presente!')
          return new RegisterUserCallAttendanceUseCaseResponse(new PreconditionError('O usuário já se encontra presente!'))
        }
        const userIsAbsent = await this.repository.getUserAbsentCallAttendance(registerUserCallAttendanceFilter.userID)

        if (userIsAbsent) {
          await this.repository.updateUserCallAttendace(registerUserCallAttendanceFilter.userID, registerUserCallAttendanceFilter.userAdmID, PRESENCE, now.toDateString())
          return new RegisterUserCallAttendanceUseCaseResponse(null)
        }
        await this.repository.registerUserCallAttendace(registerUserCallAttendanceFilter)

        return new RegisterUserCallAttendanceUseCaseResponse(null)
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new RegisterUserCallAttendanceUseCaseResponse(new InternalServerError(error.message))
    }
  }
}

class RemoveUserCallAttendanceUseCase {
  validate: RemoveUserCallAttendanceUseCaseValidateInterface
  repository: RemoveUserCallAttendanceUseCaseRepositoryInterface

  constructor(validate: RemoveUserCallAttendanceUseCaseValidateInterface,
    repository: RemoveUserCallAttendanceUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async removeUserCallAttendance(req: RemoveUserCallAttendanceUseCaseRequest):
    Promise<RemoveUserCallAttendanceUseCaseResponse> {
    try {
      const errorMessage = await this.validate.removeUserCallAttendance(req)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new RemoveUserCallAttendanceUseCaseResponse(new PreconditionError(errorMessage))
      } else {
        const userCallAttendance = await this.repository.getUserCallAttendance(req.userID)
        if (userCallAttendance && userCallAttendance.ID) {
          await this.repository.removeUserCallAttendance(userCallAttendance?.userID, req.userAdmID, req.updatedAt)
          return new RemoveUserCallAttendanceUseCaseResponse(null)
        }
        return new RemoveUserCallAttendanceUseCaseResponse(new PreconditionError('O usuário Adiministrador não esta na base'))
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new RemoveUserCallAttendanceUseCaseResponse(new InternalServerError(error.message))
    }
  }
}

class ListUserCallAttendancePresentUseCase {
  validate: ListUserCallAttendancePresentUseCaseValidateInterface
  repository: ListUserCallAttendancePresentUseCaseRepositoryInterface

  constructor(validate: ListUserCallAttendancePresentUseCaseValidateInterface,
    repository: ListUserCallAttendancePresentUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async listUserCallAttendancePresent(req: ListUserCallAttendancePresentUseCaseRequest):
    Promise<ListUserCallAttendancePresentUseCaseResponse> {
    try {
      const usersPresentFilter = new ListUsersCallAttendancePresenceOrAbsentFilter(req.voiceType, req.page, req.initialDate, req.finalDate)
      const errorMessage = this.validate.listUserCallAttendance(usersPresentFilter)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new ListUserCallAttendancePresentUseCaseResponse(null, null, new PreconditionError(errorMessage))
      } else {
        const usersPresent = await this.repository.listUserCallAttendancePresence(usersPresentFilter)
        const countUserrsPresent = await this.repository.countUserCallAttendancePresence(usersPresentFilter)

        return new ListUserCallAttendancePresentUseCaseResponse(usersPresent, countUserrsPresent, null)
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new ListUserCallAttendancePresentUseCaseResponse(null, null, new InternalServerError(error.message))
    }
  }
}
class ListUserCallAttendanceAbsentUseCase {
  validate: ListUserCallAttendanceAbsentUseCaseValidateInterface
  repository: ListUserCallAttendanceAbsentUseCaseRepositoryInterface

  constructor(validate: ListUserCallAttendanceAbsentUseCaseValidateInterface,
    repository: ListUserCallAttendanceAbsentUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async listUserCallAttendanceAbsent(req: ListUserCallAttendanceAbsentUseCaseRequest):
    Promise<ListUserCallAttendanceAbsentUseCaseResponse> {
    try {
      const userAbsentFilter = new ListUsersCallAttendancePresenceOrAbsentFilter(req.voiceType, req.page, req.initialDate, req.finalDate)
      const errorMessage = this.validate.listUserCallAttendanceAbsent(userAbsentFilter)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new ListUserCallAttendanceAbsentUseCaseResponse(null, null, new PreconditionError(errorMessage))
      } else {
        const usersAbsent = await this.repository.listUserCallAttendanceAbsent(userAbsentFilter)
        const countUsersAbsent = await this.repository.countUserCallAttendanceAbsent(userAbsentFilter)

        return new ListUserCallAttendanceAbsentUseCaseResponse(usersAbsent, countUsersAbsent, null)
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new ListUserCallAttendanceAbsentUseCaseResponse(null, null, new InternalServerError(error.message))
    }
  }
}

class ListUsersCallAttendanceUseCase {
  validate: ListUsersCallAttendanceUseCaseValidateInterface
  repository: ListUsersCallAttendanceUseCaseRepositoryInterface

  constructor(validate: ListUsersCallAttendanceUseCaseValidateInterface,
    repository: ListUsersCallAttendanceUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async listUsersCallAttendance(req: ListUsersCallAttendanceUseCaseRequest): Promise<ListUsersCallAttendanceUseCaseResponse> {
    try {
      const errorMessage = this.validate.listUsersCallAttendance(req.voiceType)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new ListUsersCallAttendanceUseCaseResponse(null, new PreconditionError(errorMessage))
      } else {


        const users = await this.repository.listUsersCallAttendance(req.voiceType, req.eventID)

        return new ListUsersCallAttendanceUseCaseResponse(users, null)
      }
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)

      return new ListUsersCallAttendanceUseCaseResponse(null, new InternalServerError(error.message))
    }
  }
}

export {
  RegisterUserCallAttendanceUseCase,
  RemoveUserCallAttendanceUseCase,
  ListUserCallAttendancePresentUseCase,
  ListUserCallAttendanceAbsentUseCase,
  ListUsersCallAttendanceUseCase
}