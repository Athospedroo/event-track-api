class GetEventRecentByVoiceTypeWrapper {
  voiceType: number

  constructor(voiceType: number) {
    this.voiceType = voiceType
  }

  getSQL(): string {
    return `
    SELECT
    e.id 
FROM public.events e 
WHERE e.voice_type = $1
    AND e.created_at = (
        SELECT MAX(created_at)
        FROM public.events
        WHERE voice_type = $1
            AND created_at::date = CURRENT_DATE
    );
   
    `
  }

  getParameters(): any[] {
    return [
      this.voiceType
    ]
  }
}

class CountUsersAbsentByVoiceType {
  eventID: number
  voiceType: number

  constructor(eventID: number, voiceType: number,) {
    this.eventID = eventID
    this.voiceType = voiceType
  }

  getSQL(): string {
    return `
    SELECT
      COUNT(*) AS total
    FROM
        "security".users u
    LEFT JOIN
        public.call_attendances ca ON u.id = ca.user_id AND ca.event_id = $1
    WHERE
      u.voice_type = $2
      AND (ca.user_id IS NULL OR ca.presence = 2);
    `
  }

  getParameters(): any[] {
    return [
      this.eventID,
      this.voiceType
    ]
  }
}

class CountUsersPresentByVoiceType {
  eventID: number
  voiceType: number

  constructor(eventID: number, voiceType: number) {
    this.eventID = eventID
    this.voiceType = voiceType
  }

  getSQL(): string {
    return `
    SELECT COUNT(*) AS total
    FROM "security".users u 
    INNER JOIN public.call_attendances ca 
        ON u.id = ca.user_id 
        AND ca.presence = $1
    WHERE u.voice_type = $3
        AND ca.event_id = $2;
    `
  }

  getParameters(): any[] {
    return [
      1 as number,
      this.eventID,
      this.voiceType
    ]
  }
}

class ListUsersRecentWrapper {
  eventID: number
  voiceType: number

  constructor(eventID: number, voiceType: number) {
    this.eventID = eventID
    this.voiceType = voiceType
  }

  getSQL(): string {
    return `
      SELECT
        u.id AS "ID",
        u."name",
        u.email,
        u."password",
        u.voice_type AS "voiceType",
        u.member_card AS "memberCard",
        u.badge_number AS "userNumberVoice",
        u.church_name AS "churchName",
        u.area_number AS "areaNumber",
        u.is_active AS "isActive",
        u.is_deleted AS "isDeleted",
        u.created_at AS "createdAt",
        u.updated_at AS "updatedAt",
        ca.created_at
      FROM "security".users u 
      LEFT JOIN public.call_attendances ca 
          ON u.id = ca.user_id
          AND ca.presence = $5
          AND ca.event_id = $1
          WHERE u.voice_type = $2
          AND (ca.user_id is not NULL OR ca.presence = $5)
      ORDER BY ca.created_at DESC
      OFFSET $3 LIMIT $4;
    `
  }

  getParameters(): any[] {
    return [
      this.eventID,
      this.voiceType,
      0,
      5,
      1
    ]
  }
}

export {
  GetEventRecentByVoiceTypeWrapper,
  CountUsersAbsentByVoiceType,
  CountUsersPresentByVoiceType,
  ListUsersRecentWrapper
}