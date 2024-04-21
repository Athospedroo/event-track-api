import { CallAttendanceEntity, ListUsersCallAttendancePresenceOrAbsentFilter, ListusersCallAttendanceFilter, RegisterUserCallAttendanceFilter } from "../../entity/callAttendance"
import { UserEntity } from "../../entity/user"

interface RegisterUserCallAttendanceUseCaseRepositoryInterface {
  getEventStartDate(eventID: number): Promise<Date | null>
  getUserPresentCallAttendance(userID: string, eventID: number): Promise<CallAttendanceEntity | null>
  registerUserCallAttendace(filter: RegisterUserCallAttendanceFilter): Promise<void>
  updateUserCallAttendace(userID: string, userAdmID: string, presence: number, updatedAt: string): Promise<void>
  getUserAbsentCallAttendance(userID: string): Promise<CallAttendanceEntity | null>
}

interface RemoveUserCallAttendanceUseCaseRepositoryInterface {
  removeUserCallAttendance(userID: string, userAdmID: string, updatedAt: Date): Promise<void>
  getUserCallAttendance(userID: string): Promise<CallAttendanceEntity | null>
}

interface ListUserCallAttendancePresentUseCaseRepositoryInterface {
  listUserCallAttendancePresence(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<UserEntity[] | null>
  countUserCallAttendancePresence(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<number | null>
}

interface ListUserCallAttendanceAbsentUseCaseRepositoryInterface {
  listUserCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<UserEntity[] | null>
  countUserCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<number | null>
}

interface ListUsersCallAttendanceUseCaseRepositoryInterface {
  listUsersCallAttendance(voiceType: number, eventID: number): Promise<ListusersCallAttendanceFilter[] | null>
}

export {
  RegisterUserCallAttendanceUseCaseRepositoryInterface,
  RemoveUserCallAttendanceUseCaseRepositoryInterface,
  ListUserCallAttendancePresentUseCaseRepositoryInterface,
  ListUserCallAttendanceAbsentUseCaseRepositoryInterface,
  ListUsersCallAttendanceUseCaseRepositoryInterface
}