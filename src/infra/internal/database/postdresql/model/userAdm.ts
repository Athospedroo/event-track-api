import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ schema: 'security', name: 'user_adm' })
class UserAdmModel {
  @PrimaryGeneratedColumn('uuid', { name: 'id', })
  ID: string | null

  @Column({ type: 'varchar', length: '255', nullable: false })
  name: string

  @Column({ type: 'varchar', length: '255', nullable: false})
  email: string

  @Column({ type: 'varchar', length: '255', nullable: false })
  password: string

  @Column({ type: 'int', name: 'is_active'})
  isActive: number

  @Column({ type: 'int', name: 'isDeleted'})
  isDeleted: number

  @Column({ type: 'timestamp with time zone', name: 'created_at', nullable: false })
  public createdAt: Date

  @Column({ type: 'timestamp with time zone', name: 'updated_at', nullable: false })
  public updatedAt: Date

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
  UserAdmModel
}