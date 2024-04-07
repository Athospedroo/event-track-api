import { ListusersCallAttendanceFilter } from "../../entity/callAttendance"
import { ErrorEntity } from "../../entity/error"
import { UserEntity } from "../../entity/user"

class RegisterUserCallAttendanceUseCaseRequest {
  userID: string
  userAdmID: string
  eventID: number
  presence: number
  badgeChecked: number
  justifieldAbsentType: number | null

  constructor(userID: string, userAdmID: string, eventID: number, presence: number, badgeChecked: number,  justifieldAbsentType: number | null,) {
    this.userID = userID
    this.userAdmID = userAdmID
    this.eventID = eventID
    this.presence = presence
    this.badgeChecked = badgeChecked
    this.justifieldAbsentType = justifieldAbsentType
  }
}

class RegisterUserCallAttendanceUseCaseResponse {
  error: ErrorEntity | null

  constructor(error: ErrorEntity | null) {
    this.error = error
  }
}

class RemoveUserCallAttendanceUseCaseRequest {
  userID: string
  userAdmID: string
  updatedAt: Date

  constructor(userID: string, userAdmID: string, updatedAt: Date) {
    this.userID = userID
    this.userAdmID = userAdmID
    this.updatedAt = updatedAt
  }
}

class RemoveUserCallAttendanceUseCaseResponse {
  error: ErrorEntity | null

  constructor(error: ErrorEntity | null) {
    this.error = error
  }
}

class ListUserCallAttendancePresentUseCaseRequest {
  voiceType: number
  page: number
  initialDate: string
  finalDate: string

  constructor(voiceType: number, page: number, initialDate: string, finalDate: string) {
    this.voiceType = voiceType
    this.page = page
    this.initialDate = initialDate
    this.finalDate = finalDate
  }
}

class ListUserCallAttendancePresentUseCaseResponse {
  users: UserEntity[] | null
  count: number | null
  error: ErrorEntity | null

  constructor(users: UserEntity[] | null, count: number | null, error: ErrorEntity | null) {
    this.users = users
    this.count = count
    this.error = error
  }
}

class ListUserCallAttendanceAbsentUseCaseRequest {
  voiceType: number
  page: number
  initialDate: string
  finalDate: string

  constructor(voiceType: number, page: number, initialDate: string, finalDate: string) {
    this.voiceType = voiceType
    this.page = page
    this.initialDate = initialDate
    this.finalDate = finalDate
  }
}

class ListUserCallAttendanceAbsentUseCaseResponse {
  users: UserEntity[] | null
  count: number | null
  error: ErrorEntity | null

  constructor(users: UserEntity[] | null, count: number | null, error: ErrorEntity | null) {
    this.users = users
    this.count = count
    this.error = error
  }
}

class ListUsersCallAttendanceUseCaseRequest {
  voiceType: number

  constructor(voiceType: number) {
    this.voiceType = voiceType
  }
}

class ListUsersCallAttendanceUseCaseResponse {
  usersCallAttendance :ListusersCallAttendanceFilter[] | null
  error: ErrorEntity | null

  constructor(usersCallAttendace: ListusersCallAttendanceFilter[] | null, 
    error: ErrorEntity | null) {
    this.usersCallAttendance = usersCallAttendace
    this.error = error
  }
}

export {
  RegisterUserCallAttendanceUseCaseRequest,
  RegisterUserCallAttendanceUseCaseResponse,
  RemoveUserCallAttendanceUseCaseRequest,
  RemoveUserCallAttendanceUseCaseResponse,
  ListUserCallAttendancePresentUseCaseRequest,
  ListUserCallAttendancePresentUseCaseResponse,
  ListUserCallAttendanceAbsentUseCaseRequest,
  ListUserCallAttendanceAbsentUseCaseResponse,
  ListUsersCallAttendanceUseCaseRequest,
  ListUsersCallAttendanceUseCaseResponse
}