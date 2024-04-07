import { ErrorEntity } from "../../entity/error"
import { EventEntity } from "../../entity/event"

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

  constructor (error: ErrorEntity | null) {
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


export {
  CreateEventUseCaseRequest,
  CreateEventUseCaseResponse,
  ListEventUseCaseResponse,
  InitEventUseCaseRequest,
  InitEventUseCaseResponse,
  ConcludeEventUseCaseRequest,
  ConcludeEventUseCaseResponse
}