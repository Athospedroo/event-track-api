import { MAX_DATA_PAGE, NOT_PRESENCE, PRESENCE } from "../../../../../domain/constants/util"

class ListUserCallAttendanceAbsentWrapper {
  voiceType: number
  page: number
  initialDate: string
  finalDate: string

  constructor(voiceType: number, page: number, initialDate: string, finalDate: string) {
    this.voiceType = voiceType
    this.page = page
    this.initialDate = initialDate
    this.finalDate = finalDate
  }

  getSQL(): string {
    return `
    SELECT
      u.id as "ID",
      u."name" ,
      u.email ,
      u."password" ,
      u.voice_type as "voiceType",
      u.member_card as "memberCard",
      u.user_number_voice as "userNumberVoice",
      u.church_name as "churchName",
      u.area_number as "areaNumber",
      u.is_active as "isActive",
      u.is_deleted as "isDeleted",
      u.created_at as "createdAt",
      u.updated_at as "updatedAt"
    FROM "security".users u 
    LEFT JOIN public.call_attendance ca ON u.id = ca.user_id
    WHERE u.voice_type = $1
    AND ca.user_id IS NULL OR ca.presence = $2
    AND ca.created_at BETWEEN $3 AND $4
    order by u.user_number_voice
    offset $5 limit $6
      `
  }

  getParameters(): any[] {
    return [
      this.voiceType,
      NOT_PRESENCE,
      this.initialDate,
      this.finalDate,
      typeof this.page === 'number' ? this.page * MAX_DATA_PAGE : 0,
      MAX_DATA_PAGE
    ]
  }
}

class CountUserCallAttendanceAbsentWrapper {
  voiceType: number
  initialDate: string
  finalDate: string

  constructor(voiceType: number, initialDate: string, finalDate: string) {
    this.voiceType = voiceType
    this.initialDate = initialDate
    this.finalDate = finalDate
  }

  getSQL(): string {
    return `
    SELECT COUNT(*)
    FROM "security".users u 
    LEFT JOIN public.call_attendance ca ON u.id = ca.user_id
    WHERE u.voice_type = $1
    AND ca.user_id IS NULL OR ca.presence = $2
    AND ca.created_at BETWEEN $3 AND $4
    `
  }

  getParameters(): any[] {
    return [
      this.voiceType,
      NOT_PRESENCE,
      this.initialDate,
      this.finalDate
    ]
  }
}

class ListUserCallAttendancePresentWrapper {
  voiceType: number
  page: number
  initialDate: string
  finalDate: string

  constructor(voiceType: number, page: number, initialDate: string, finalDate: string) {
    this.voiceType = voiceType
    this.page = page
    this.initialDate = initialDate
    this.finalDate = finalDate
  }

  getSQL(): string {
    return `
    select
      u.id as "ID",
      u."name" ,
      u.email ,
      u."password" ,
      u.voice_type as "voiceType",
      u.member_card as "memberCard",
      u.user_number_voice as "userNumberVoice",
      u.church_name as "churchName",
      u.area_number as "areaNumber",
      u.is_active as "isActive",
      u.is_deleted as "isDeleted",
      u.created_at as "createdAt",
      u.updated_at as "updatedAt",
      u.phone,
      u.shirt_size as "shirtSize",
      u.user_type as "userType",
      u.user_date_birth as "userDateBirth"

    FROM "security".users u 
    INNER JOIN public.call_attendance ca ON u.id = ca.user_id
    WHERE u.voice_type = $1
    AND  ca.presence = $2
    and ca.created_at BETWEEN $3 AND $4
    order by u.user_number_voice
    offset $5 limit $6
        `
  }

  getParameters(): any[] {
    return [
      this.voiceType,
      PRESENCE,
      this.initialDate,
      this.finalDate,
      typeof this.page === 'number' ? this.page * MAX_DATA_PAGE : 0,
      MAX_DATA_PAGE
    ]
  }
}
class CountUserCallAttendancePresentWrapper {
  voiceType: number
  initialDate: string
  finalDate: string

  constructor(voiceType: number, initialDate: string, finalDate: string) {
    this.voiceType = voiceType
    this.initialDate = initialDate
    this.finalDate = finalDate
  }

  getSQL(): string {
    return `
    SELECT COUNT(*)
    FROM "security".users u 
    INNER JOIN public.call_attendance ca ON u.id = ca.user_id
    WHERE u.voice_type = $1
    AND  ca.presence = $2
    AND ca.created_at BETWEEN $3 AND $4
    `
  }

  getParameters(): any[] {
    return [
      this.voiceType,
      PRESENCE,
      this.initialDate,
      this.finalDate,
    ]
  }
}
class ListUserCallAttendanceWrapper {
  voiceType: number
  eventID: number

  constructor(voiceType: number, eventID: number) {
    this.voiceType = voiceType
    this.eventID = eventID

  }

  getSQL(): string {
    return `
    SELECT
    u.badge_number AS "badgeNumber",
    u.id AS "ID",
    u."name",
    u.email,
    u.voice_type AS "voiceType",
    u.member_card AS "memberCard",
    u.church_name AS "churchName",
    u.area_number AS "areaNumber",
    u.is_active AS "isActive",
    u.is_deleted AS "isDeleted",
    ca.badge_checked AS "badgeChecked",
    u.phone,
    u.shirt_size as "shirtSize",
    u.user_type as "userType",
    u.user_date_birth as "userDateBirth",
    CASE 
        WHEN ca.user_id IS NOT NULL THEN TRUE
        ELSE FALSE
    END AS presence
FROM "security".users u 
LEFT JOIN public.call_attendances ca ON u.id = ca.user_id AND ca.event_id = $2
WHERE u.voice_type = $1

ORDER BY u.badge_number ASC;
      `
  }
  getParameters(): any[] {
    return [
      this.voiceType,
      this.eventID
    ]
  }
}

export {
  ListUserCallAttendanceAbsentWrapper,
  ListUserCallAttendancePresentWrapper,
  CountUserCallAttendanceAbsentWrapper,
  CountUserCallAttendancePresentWrapper,
  ListUserCallAttendanceWrapper
}