import { ListUsersCallAttendancePresenceOrAbsentFilter, RegisterUserCallAttendanceFilter } from "../../entity/callAttendance"
import { RemoveUserCallAttendanceUseCaseRequest } from "../ucio/callAttendance"

interface RegisterUserCallAttendanceUseCaseValidateInterface {
  registerUserCallAttendance(filter: RegisterUserCallAttendanceFilter): Promise<string | null>
}

interface RemoveUserCallAttendanceUseCaseValidateInterface {
  removeUserCallAttendance(req: RemoveUserCallAttendanceUseCaseRequest): Promise<string | null>
}

interface ListUserCallAttendancePresentUseCaseValidateInterface {
  listUserCallAttendance(filter: ListUsersCallAttendancePresenceOrAbsentFilter): string | null
}

interface ListUserCallAttendanceAbsentUseCaseValidateInterface {
  listUserCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): string | null
}

interface ListUsersCallAttendanceUseCaseValidateInterface {
  listUsersCallAttendance(voiceType: number): string | null
}

export {
  RegisterUserCallAttendanceUseCaseValidateInterface,
  RemoveUserCallAttendanceUseCaseValidateInterface,
  ListUserCallAttendancePresentUseCaseValidateInterface,
  ListUserCallAttendanceAbsentUseCaseValidateInterface,
  ListUsersCallAttendanceUseCaseValidateInterface
}