class EventEntity {
  ID: number | null
  name: string
  description: string
  voiceType: number
  concluded: number
  date: Date | null
  createdAt: Date
  updatedAt: Date

  constructor(ID: number | null, name: string, description: string, voiceType: number,
    concluded: number, date: Date | null, createdAt: Date, updatedAt: Date) {
    this.ID = ID
    this.name = name
    this.description = description
    this.voiceType = voiceType
    this.concluded = concluded
    this.date = date
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export {
  EventEntity
}