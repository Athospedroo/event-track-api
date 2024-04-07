import { NOT_PRESENCE, PRESENCE } from "../../../../domain/constants/util"
import { CallAttendanceEntity, ListUsersCallAttendancePresenceOrAbsentFilter, ListusersCallAttendanceFilter, RegisterUserCallAttendanceFilter } from "../../../../domain/entity/callAttendance"
import { UserEntity } from "../../../../domain/entity/user"
import { Connection } from "./connection"
import { CallAttendanceModel } from "./model/callAttendance"
import { toCallAttendanceEntity, toCallAttendanceModel } from "./transformer/callAttendance"
import { CountUserCallAttendanceAbsentWrapper, CountUserCallAttendancePresentWrapper, ListUserCallAttendanceAbsentWrapper, ListUserCallAttendancePresentWrapper, ListUserCallAttendanceWrapper } from "./wrapper/callAttendance"

async function registerUserCallAttendance(filter: RegisterUserCallAttendanceFilter): Promise<void> {
  const repository = await Connection.getRepository(CallAttendanceModel)
  const model = toCallAttendanceModel(filter)
  await repository.save(model)
}

async function removeUserCallAttendance(userID: string, userAdmID: string, updatedAt: Date): Promise<void> {
  const repository = await Connection.getRepository(CallAttendanceModel)
  await repository.update({ userID },{ userAdmID, updatedAt, presence: NOT_PRESENCE } )
  }

async function getUserCallAttendance(userID: string): Promise<CallAttendanceEntity | null> {
  const repository = await Connection.getRepository(CallAttendanceModel)

  const getUserCallAttendance = await repository.findOneBy({ userID })

  return getUserCallAttendance ? toCallAttendanceEntity(getUserCallAttendance) : null
}

async function getUserPresentCallAttendance(userID: string): Promise<CallAttendanceEntity | null> {
  const repository = await Connection.getRepository(CallAttendanceModel)

  const getUserCallAttendance = await repository.findOneBy({ userID, presence: PRESENCE })
  return getUserCallAttendance ? toCallAttendanceEntity(getUserCallAttendance) : null
}

async function getUserAbsentCallAttendance(userID: string): Promise<CallAttendanceEntity | null> {
  const repository = await Connection.getRepository(CallAttendanceModel)

  const getUserAbsentCallAttendance = await repository.findOneBy({ userID, presence: NOT_PRESENCE })
  return getUserAbsentCallAttendance ? toCallAttendanceEntity(getUserAbsentCallAttendance) : null
}

async function updateUserCallAttendace(userID: string, userAdmID: string, presence: number, updatedAt: string): Promise<void> {
  const repository = await Connection.getRepository(CallAttendanceModel)
  await repository.update({ userID },{ userAdmID, updatedAt, presence } )
}

async function listUsersCallAttendancePresence(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<UserEntity[] | null> {
  const { voiceType, page, initialDate, finalDate } = filter
  const manager = await Connection.getManager()
  const adjustedInitialDate = `${initialDate} 00:00:00`
  const adjustedFinalDate = `${finalDate} 23:59:59`

  const wrapper = new ListUserCallAttendancePresentWrapper(voiceType, page, adjustedInitialDate, adjustedFinalDate)
  const result = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  return result
}

async function countUsersCallAttendancePresence(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<number | null> {
  const { voiceType, initialDate, finalDate } = filter
  const manager = await Connection.getManager()
  const adjustedInitialDate = `${initialDate} 00:00:00`
  const adjustedFinalDate = `${finalDate} 23:59:59`

  const wrapper = new CountUserCallAttendancePresentWrapper(voiceType, adjustedInitialDate, adjustedFinalDate)
  const [row] = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  const { count } = row
  return count
}

async function listUsersCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<UserEntity[] | null> {
  const { voiceType, page, initialDate, finalDate } = filter
  const manager = await Connection.getManager()
  const adjustedInitialDate = `${initialDate} 00:00:00`
  const adjustedFinalDate = `${finalDate} 23:59:59`

  const wrapper = new ListUserCallAttendanceAbsentWrapper(voiceType, page, adjustedInitialDate, adjustedFinalDate)
  const result = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  return result
}

async function countUsersCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): Promise<number | null> {
  const { voiceType, initialDate, finalDate } = filter
  const manager = await Connection.getManager()
  const adjustedInitialDate = `${initialDate} 00:00:00`
  const adjustedFinalDate = `${finalDate} 23:59:59`

  const wrapper = new CountUserCallAttendanceAbsentWrapper(voiceType, adjustedInitialDate, adjustedFinalDate)
  const [row] = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  const { count } = row
  return count
}

async function listUsersCallAttendance(voiceType: number): Promise<ListusersCallAttendanceFilter[] | null> {
  const manager = await Connection.getManager()

  const wrapper = new ListUserCallAttendanceWrapper(voiceType)
  const result = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  return result
}

export {
  registerUserCallAttendance,
  removeUserCallAttendance,
  getUserCallAttendance,
  listUsersCallAttendanceAbsent,
  listUsersCallAttendancePresence,
  countUsersCallAttendanceAbsent,
  countUsersCallAttendancePresence,
  getUserPresentCallAttendance,
  updateUserCallAttendace,
  getUserAbsentCallAttendance,
  listUsersCallAttendance
}