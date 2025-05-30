class UserEntity {
  ID: string | null
  qrCodeID: string
  name: string
  email: string | null
  password: string | null
  voiceType: number
  memberCard: string | null
  badgeNumber: number
  churchName: string | null
  areaNumber: string | null
  phone: string | null
  shirtSize: string | null
  userType: number
  userDateBirth: Date
  isActive: number
  isDeleted: number
  createdAt: Date
  updatedAt: Date

  constructor(
    ID: string | null,
    qrCodeID: string,
    name: string,
    email: string | null,
    password: string | null,
    voiceType: number,
    memberCard: string | null,
    badgeNumber: number,
    churchName: string | null,
    areaNumber: string | null,
    phone: string | null,
    shirtSize: string | null,
    userType: number,
    userDateBirth: Date,
    isActive: number,
    isDeleted: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.ID = ID
    this.qrCodeID = qrCodeID
    this.name = name
    this.email = email
    this.password = password
    this.voiceType = voiceType
    this.memberCard = memberCard
    this.badgeNumber = badgeNumber
    this.churchName = churchName
    this.areaNumber = areaNumber
    this.phone = phone
    this.shirtSize = shirtSize
    this.userType = userType
    this.userDateBirth = userDateBirth
    this.isActive = isActive
    this.isDeleted = isDeleted
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}


export {
  UserEntity
}