class UserAdmEntity {
  ID: string | null
  name: string
  email: string
  password: string
  isActive: number
  isDeleted: number
  createdAt: Date
  updatedAt: Date

  constructor(ID: string | null, name: string, email: string, password: string,
    isActive: number, isDeleted: number, createdAt: Date, updatedAt: Date) {
    this.ID = ID
    this.name = name
    this.email = email
    this.password = password
    this.isActive = isActive
    this.isDeleted = isDeleted
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export {
  UserAdmEntity
}