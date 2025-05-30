import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'security', name: 'users' })
class UserModel {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  ID: string | null

  @Column({ type: 'uuid', name: 'qr_uuid' })
  qrCodeID: string

  @Column({ type: 'varchar', length: '255', nullable: false })
  name: string

  @Column({ type: 'varchar', length: '255', nullable: true })
  email: string | null

  @Column({ type: 'varchar', length: '255' })
  password: string | null

  @Column({ type: 'int', name: 'voice_type', nullable: false })
  voiceType: number

  @Column({ type: 'varchar', length: '60', name: 'member_card' })
  memberCard: string | null

  @Column({ type: 'int', name: 'badge_number', nullable: false })
  badgeNumber: number

  @Column({ type: 'varchar', name: 'church_name', length: '255' })
  churchName: string | null

  @Column({ type: 'varchar', length: '100', name: 'area_number' })
  areaNumber: string | null

  @Column({ type: 'varchar', length: '50', nullable: true })
  phone: string | null

  @Column({ type: 'varchar', length: '50', name: 'shirt_size' })
  shirtSize: string | null

  @Column({ type: 'int', name: 'user_type', nullable: false })
  userType: number

  @Column({ type: 'timestamp', name: 'user_date_birth' })
  userDateBirth: Date

  @Column({ type: 'int', name: 'is_active', nullable: false })
  isActive: number

  @Column({ type: 'int', name: 'is_deleted', nullable: false })
  isDeleted: number

  @Column({ type: 'timestamp with time zone', name: 'created_at', nullable: false })
  createdAt: Date

  @Column({ type: 'timestamp with time zone', name: 'updated_at', nullable: false })
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
  UserModel
}