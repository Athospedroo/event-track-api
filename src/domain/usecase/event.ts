import { NOT_CONCLUDED } from "../constants/event";
import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error";
import { EventEntity } from "../entity/event";
import { ConcludeEventUseCaseRepositoryInterface, CreateEventUseCaseRepositoryInterface, EventTrackAnalyticsUseCaseRepositoryInterface, InitEventUseCaseRepositoryInterface, ListEventUseCaseRepositoryInterface } from "./repository/event";
import { ConcludeEventUseCaseRequest, ConcludeEventUseCaseResponse, CreateEventUseCaseRequest, CreateEventUseCaseResponse, EventTrackAnalyticsUseCaseRequest, EventTrackAnalyticsUseCaseResponse, InitEventUseCaseRequest, InitEventUseCaseResponse, ListEventUseCaseResponse } from "./ucio/event";
import { ConcludeEventUseCaseValidateInterface, CreateEventUseCaseValidateInterface, EventTrackAnalyticsUseCaseValidateInterface, InitEventUseCaseValidateInterface } from "./validate/event";

class CreateEventUseCase {
  validate: CreateEventUseCaseValidateInterface
  repository: CreateEventUseCaseRepositoryInterface

  constructor(validate: CreateEventUseCaseValidateInterface,
    repository: CreateEventUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async createEvent(req: CreateEventUseCaseRequest): Promise<CreateEventUseCaseResponse> {
    try {
      const errorMessage = this.validate.createEvent(req)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new CreateEventUseCaseResponse(new PreconditionError(errorMessage))
      }

      const now = new Date()
      const eventFilter = new EventEntity(null, req.name, req.description as string, req.voiceType, NOT_CONCLUDED, null, now, now)
      await this.repository.createEvent(eventFilter)

      return new CreateEventUseCaseResponse(null)

    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new CreateEventUseCaseResponse(new InternalServerError(error.message))
    }
  }
}

class ListEventUseCase {
  repository: ListEventUseCaseRepositoryInterface

  constructor(repository: ListEventUseCaseRepositoryInterface) {
    this.repository = repository
  }

  async listEvent(): Promise<ListEventUseCaseResponse> {
    try {
      const events = await this.repository.listEvent()
      return new ListEventUseCaseResponse(events, null)
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)
      return new ListEventUseCaseResponse(null, new InternalServerError(error.message))
    }
  }
}

class InitEventUseCase {
  validate: InitEventUseCaseValidateInterface
  repository: InitEventUseCaseRepositoryInterface

  constructor(validate: InitEventUseCaseValidateInterface,
    repository: InitEventUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async initEvent(req: InitEventUseCaseRequest): Promise<InitEventUseCaseResponse> {
    try {
      const errorMessage = await this.validate.initEvent(req.eventID)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new InitEventUseCaseResponse(new PreconditionError(errorMessage))
      }

      const eventHasStarted = await this.repository.getEventStarted(req.eventID)

      if (eventHasStarted?.date !== null) return new InitEventUseCaseResponse(new PreconditionError('O evento já foi iniciado!'))

      const date = new Date()
      await this.repository.initEvent(req.eventID, date)
      return new InitEventUseCaseResponse(null)

    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)

      return new InitEventUseCaseResponse(new InternalServerError(error.message))
    }
  }
}

class ConcludeEventUseCase {
  validate: ConcludeEventUseCaseValidateInterface
  repository: ConcludeEventUseCaseRepositoryInterface

  constructor(validate: ConcludeEventUseCaseValidateInterface,
    repository: ConcludeEventUseCaseRepositoryInterface
  ) {
    this.validate = validate
    this.repository = repository
  }

  async concludeEvent(req: ConcludeEventUseCaseRequest): Promise<ConcludeEventUseCaseResponse> {
    try {
      const errorMessage = this.validate.concludeEvent(req.eventID)

      if (errorMessage) return new ConcludeEventUseCaseResponse(new PreconditionError(errorMessage))

      await this.repository.concludeEvent(req.eventID)

      return new ConcludeEventUseCaseResponse(null)
    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)

      return new ConcludeEventUseCaseResponse(new InternalServerError(error.message))
    }
  }
}

class EventTrackAnalyticsUseCase {
  validate: EventTrackAnalyticsUseCaseValidateInterface
  repository: EventTrackAnalyticsUseCaseRepositoryInterface

  constructor(validate: EventTrackAnalyticsUseCaseValidateInterface, repository: EventTrackAnalyticsUseCaseRepositoryInterface) {
    this.validate = validate
    this.repository = repository
  }

  async eventTrackAnalutics(req: EventTrackAnalyticsUseCaseRequest): Promise<EventTrackAnalyticsUseCaseResponse> {
    try {
      const { voiceType } = req
      const errorMessage = this.validate.eventTrackAnalytics(req.voiceType)

      if (errorMessage) {
        console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
        return new EventTrackAnalyticsUseCaseResponse(null, null, null, new PreconditionError(errorMessage))
      }

      const eventRecentID = await this.repository.getEventRecentByVoiceType(req.voiceType)

      if (eventRecentID) {
        const usersPresent = await this.repository.countUsersPresentsByVoiceType(eventRecentID, voiceType)
        const usetsAbsent = await this.repository.countUsersAbsentByVoiceType(eventRecentID, voiceType)
        const usersRecent = await this.repository.listUsersRecent(eventRecentID, voiceType)
  
        return new EventTrackAnalyticsUseCaseResponse(usersPresent, usetsAbsent, usersRecent, null)

      }
      return new EventTrackAnalyticsUseCaseResponse(null, null, null, new PreconditionError("evento não encontrado!"))

    } catch (error: any) {
      console.log(TAG_INTERNAL_SERVER_ERROR, error)

      return new EventTrackAnalyticsUseCaseResponse(null, null, null, new InternalServerError(error.message))
    }
  }
}

export {
  CreateEventUseCase,
  ListEventUseCase,
  InitEventUseCase,
  ConcludeEventUseCase,
  EventTrackAnalyticsUseCase
}