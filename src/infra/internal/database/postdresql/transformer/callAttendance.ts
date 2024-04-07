import { CallAttendanceEntity } from "../../../../../domain/entity/callAttendance"
import { CallAttendanceModel } from "../model/callAttendance"

function toCallAttendanceEntity(m: CallAttendanceModel): CallAttendanceEntity {
  return new CallAttendanceEntity(
    m.ID,
    m.userID,
    m.userAdmID,
    m.eventID,
    m.presence,
    m.badgeChecked,
    m.justifieldAbsentType,
    m.createdAt,
    m.updatedAt
  )
}

function toCallAttendanceModel(e: CallAttendanceEntity): CallAttendanceModel {
  return new CallAttendanceEntity(
    e.ID,
    e.userID,
    e.userAdmID,
    e.eventID,
    e.presence,
    e.badgeChecked,
    e.justifieldAbsentType,
    e.createdAt,
    e.updatedAt
  )
}

export {
  toCallAttendanceEntity,
  toCallAttendanceModel
}