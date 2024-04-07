import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'security', name: 'users' })
class UserModel {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public ID: string | null

  @Column({ type: 'varchar', length: '255', nullable: false })
  public name: string

  @Column({ type: 'varchar', length: '255', nullable: true })
  public email: string | null

  @Column({ type: 'varchar', length: '255' })
  public password: string | null

  @Column({ type: 'int', name: 'voice_type', nullable: false })
  public voiceType: number

  @Column({ type: 'varchar', length: '60', name: 'member_card' })
  public memberCard: string | null

  @Column({ type: 'int', name: 'badge_number', nullable: false })
  public badgeNumber: number

  @Column({ type: 'varchar', name: 'church_name', length: '255' })
  public churchName: string | null

  @Column({ type: 'varchar', length: '100', name: 'area_number' })
  public areaNumber: string | null

  @Column({ type: 'varchar', length: '50', nullable: true })
  public phone: string | null

  @Column({ type: 'varchar', length: '50', name: 'shirt_size' })
  public shirtSize: string | null

  @Column({ type: 'int', name: 'user_type', nullable: false })
  public userType: number

  @Column({ type: 'timestamp', name: 'user_date_birth' })
  public userDateBirth: Date

  @Column({ type: 'int', name: 'is_active', nullable: false })
  public isActive: number

  @Column({ type: 'int', name: 'is_deleted', nullable: false })
  public isDeleted: number

  @Column({ type: 'timestamp with time zone', name: 'created_at', nullable: false })
  public createdAt: Date

  @Column({ type: 'timestamp with time zone', name: 'updated_at', nullable: false })
  public updatedAt: Date

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
    isDeleted: number,
    createdAt: Date,
    updatedAt: Date,
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
    this.isDeleted = isDeleted
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export {
  UserModel
}