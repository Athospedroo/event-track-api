import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'public', name: 'call_attendances' })
class CallAttendanceModel {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
  ID: number | null

  @Column({ type: 'varchar', length: '500', name: 'user_id', nullable: false })
  userID: string

  @Column({ type: 'varchar', length: '500', name: 'user_adm_id', nullable: false })
  userAdmID: string

  @Column({ type: 'int', name: 'event_id', nullable: false })
  eventID: number

  @Column({ type: 'int', name: 'presence', nullable: false })
  presence: number

  @Column({ type: 'int', name: 'badge_checked', nullable: false })
  badgeChecked: number

  @Column({ type: 'int', name: 'justified_absence_type', nullable: true })
  justifieldAbsentType: number | null

  @Column({ type: 'timestamp with time zone', name: 'created_at', nullable: false })
  createdAt: Date

  @Column({ type: 'timestamp with time zone', name: 'updated_at', nullable: false })
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

export {
  CallAttendanceModel
}