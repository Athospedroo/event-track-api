class CallAttendanceEntity {
  ID: number | null
  userID: string
  userAdmID: string
  eventID: number
  presence: number
  badgeChecked: number
  justifieldAbsentType: number | null
  createdAt: Date
  updatedAt: Date

  constructor(ID: number | null, userID: string, userAdmID: string, eventID: number, presence: number,
    badgeChecked: number, justifieldAbsentType: number | null, createdAt: Date, updatedAt: Date) {
    this.ID = ID
    this.userID = userID
    this.userAdmID = userAdmID
    this.eventID = eventID
    this.presence = presence
    this.badgeChecked = badgeChecked
    this.justifieldAbsentType = justifieldAbsentType
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

class RegisterUserCallAttendanceFilter {
  ID: number | null
  userID: string
  userAdmID: string
  eventID: number
  presence: number
  badgeChecked: number
  justifieldAbsentType: number | null
  createdAt: Date
  updatedAt: Date

  constructor(ID: number | null, userID: string, userAdmID: string, eventID: number, presence: number,
    badgeChecked: number, justifieldAbsentType: number | null, createdAt: Date, updatedAt: Date) {
    this.ID = ID
    this.userID = userID
    this.userAdmID = userAdmID
    this.eventID = eventID
    this.presence = presence
    this.badgeChecked = badgeChecked
    this.justifieldAbsentType = justifieldAbsentType
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

class ListUsersCallAttendancePresenceOrAbsentFilter {
  voiceType: number
  page: number
  initialDate: string
  finalDate: string

  constructor(voiceType: number, page: number, inicialDate: string, finalDate: string) {
    this.voiceType = voiceType
    this.page = page
    this.initialDate = inicialDate
    this.finalDate = finalDate
  }
}

class ListusersCallAttendanceFilter {
  ID: string | null
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

  constructor(
    ID: string | null,
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
  ) {
    this.ID = ID
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
  }
}

export {
  CallAttendanceEntity,
  RegisterUserCallAttendanceFilter,
  ListUsersCallAttendancePresenceOrAbsentFilter,
  ListusersCallAttendanceFilter
}