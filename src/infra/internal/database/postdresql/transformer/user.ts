import { UserEntity } from "../../../../../domain/entity/user"
import { UserModel } from "../model/user"

function toUserEntity(m: UserModel): UserEntity {
  return new UserEntity(m.ID, m.name, m.email, m.password, m.voiceType,
    m.memberCard, m.badgeNumber, m.churchName, m.areaNumber, m.phone, m.shirtSize, m.userType, m.userDateBirth, m.isActive, m.isDeleted, m.createdAt,
    m.updatedAt
  )
}

function toUserModel(e: UserEntity): UserModel {
  return new UserModel(e.ID, e.name, e.email, e.password, e.voiceType,
    e.memberCard, e.badgeNumber, e.churchName, e.areaNumber, e.phone, e.shirtSize, e.userType, e.userDateBirth, e.isActive, e.isDeleted, e.createdAt,
    e.updatedAt
  )
}

export {
  toUserEntity,
  toUserModel
}