import { ErrorEntity } from "../../entity/error"
import { EventEntity } from "../../entity/event"
import { UserEntity } from "../../entity/user"

class CreateEventUseCaseRequest {
  name: string
  description: string | null
  voiceType: number

  constructor(name: string, description: string | null, voiceType: number) {
    this.name = name
    this.description = description
    this.voiceType = voiceType
  }
}

class CreateEventUseCaseResponse {
  error: ErrorEntity | null

  constructor(error: ErrorEntity | null) {
    this.error = error
  }
}

class ListEventUseCaseResponse {
  events: EventEntity[] | null
  error: ErrorEntity | null

  constructor(events: EventEntity[] | null, error: ErrorEntity | null) {
    this.events = events
    this.error = error
  }
}

class InitEventUseCaseRequest {
  eventID: number

  constructor(eventID: number) {
    this.eventID = eventID
  }
}

class InitEventUseCaseResponse {
  error: ErrorEntity | null

  constructor(error: ErrorEntity | null) {
    this.error = error
  }
}

class ConcludeEventUseCaseRequest {
  eventID: number

  constructor(eventID: number) {
    this.eventID = eventID
  }
}

class ConcludeEventUseCaseResponse {
  error: ErrorEntity | null

  constructor(error: ErrorEntity | null) {
    this.error = error
  }
}

class EventTrackAnalyticsUseCaseRequest {
  eventID: number
  voiceType: number

  constructor(eventID: number, voiceType: number,) {
    this.eventID = eventID
    this.voiceType = voiceType
  }
}

class EventTrackAnalyticsUseCaseResponse {
  usersPresent: number | null
  usersAbsent: number | null
  recentsUsers: UserEntity[] | null
  error: ErrorEntity | null

  constructor(usersPresent: number | null, usersAbsent: number | null, recentsUsers: UserEntity[] | null, error: ErrorEntity | null) {
    this.usersPresent = usersPresent
    this.usersAbsent = usersAbsent
    this.recentsUsers = recentsUsers
    this.error = error
  }
}

export {
  CreateEventUseCaseRequest,
  CreateEventUseCaseResponse,
  ListEventUseCaseResponse,
  InitEventUseCaseRequest,
  InitEventUseCaseResponse,
  ConcludeEventUseCaseRequest,
  ConcludeEventUseCaseResponse,
  EventTrackAnalyticsUseCaseRequest,
  EventTrackAnalyticsUseCaseResponse
}