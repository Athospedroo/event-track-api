import { CallAttendanceEntity, ListUsersCallAttendancePresenceOrAbsentFilter, ListusersCallAttendanceFilter, RegisterUserCallAttendanceFilter } from "../../../domain/entity/callAttendance"
import { UserEntity } from "../../../domain/entity/user"
import { ListUserCallAttendanceAbsentUseCaseRepositoryInterface, ListUserCallAttendancePresentUseCaseRepositoryInterface, ListUsersCallAttendanceUseCaseRepositoryInterface, RegisterUserCallAttendanceUseCaseRepositoryInterface, RemoveUserCallAttendanceUseCaseRepositoryInterface } from "../../../domain/usecase/repository/callAttendance"
import { countUsersCallAttendanceAbsent, countUsersCallAttendancePresence, getUserAbsentCallAttendance, getUserCallAttendance, getUserPresentCallAttendance, listUsersCallAttendance, listUsersCallAttendanceAbsent, listUsersCallAttendancePresence, registerUserCallAttendance, removeUserCallAttendance, updateUserCallAttendace } from "../../internal/database/postdresql/callAttendance"
import { getEventStartDate } from "../../internal/database/postdresql/event"

class RegisterUserCallAttendanceUseCaseRepository implements RegisterUserCallAttendanceUseCaseRepositoryInterface {
  async getEventStartDate(eventID: number): Promise<Date | null> {
    return getEventStartDate(eventID)
  }

  async getUserPresentCallAttendance(userID: string): Promise<CallAttendanceEntity | null> {
    return getUserPresentCallAttendance(userID)
  }

  async getUserAbsentCallAttendance(userID: string): Promise<CallAttendanceEntity | null> {
    return await getUserAbsentCallAttendance(userID)
  }

  async registerUserCallAttendace(filter: RegisterUserCallAttendanceFilter): Promise<void> {
    return await registerUserCallAttendance(filter)
  }

  async updateUserCallAttendace(userID: string, userAdmID: string, presence: number, updatedAt: string): Promise<void> {
    return await updateUserCallAttendace(userID, userAdmID, presence, updatedAt)
  }
}

class RemoveUserCallAttendanceUseCaseRepository implements RemoveUserCallAttendanceUseCaseRepositoryInterface {
  async getUserCallAttendance(userID: string): Promise<CallAttendanceEntity | null> {
    return getUserCallAttendance(userID)
  }

  async removeUserCallAttendance(userID: string, userAdmID: string, updatedAt: Date): Promise<void> {
    return removeUserCallAttendance(userID, userAdmID, updatedAt)
  }
}

class ListUserCallAttendancePresentUseCaseRepository implements ListUserCallAttendancePresentUseCaseRepositoryInterface {
  async listUserCallAttendancePresence(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<UserEntity[] | null> {
    return listUsersCallAttendancePresence(filter)
  }

  async countUserCallAttendancePresence(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<number | null> {
    return countUsersCallAttendancePresence(filter)
  }
}

class ListUserCallAttendanceAbsentUseCaseRepository implements ListUserCallAttendanceAbsentUseCaseRepositoryInterface {
  async listUserCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<UserEntity[] | null> {
    return listUsersCallAttendanceAbsent(filter)
  }
  async countUserCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<number | null> {
    return countUsersCallAttendanceAbsent(filter)
  }
}

class ListUsersCallAttendanceuseCaseRepository implements ListUsersCallAttendanceUseCaseRepositoryInterface {
  async listUsersCallAttendance(voiceType: number): Promise<ListusersCallAttendanceFilter[] | null> {
    return await listUsersCallAttendance(voiceType)
  }
}
export {
  RegisterUserCallAttendanceUseCaseRepository,
  RemoveUserCallAttendanceUseCaseRepository,
  ListUserCallAttendancePresentUseCaseRepository,
  ListUserCallAttendanceAbsentUseCaseRepository,
  ListUsersCallAttendanceuseCaseRepository
}