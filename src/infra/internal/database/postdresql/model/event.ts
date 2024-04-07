import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'public', name: 'events' })
class EventModel {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
  ID: number | null

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string

  @Column({ type: 'int', name: 'voice_type', nullable: false })
  voiceType: number

  @Column({ type: 'int', nullable: false })
  concluded: number

  @Column({ type: 'time with time zone', nullable: true })
  date: Date | null

  @Column({ type: 'time with time zone', name: 'created_at', nullable: false })
  createdAt: Date

  @Column({ type: 'time with time zone', name: 'updated_at', nullable: false })
  updatedAt: Date

  constructor(ID: number | null, name: string, description: string, voiceType: number,
    concluded: number, date: Date, createdAt: Date, updatedAt: Date) {
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
  EventModel
}