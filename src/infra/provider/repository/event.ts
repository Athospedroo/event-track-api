import { EventEntity } from "../../../domain/entity/event"
import { UserEntity } from "../../../domain/entity/user"
import { ConcludeEventUseCaseRepositoryInterface, CreateEventUseCaseRepositoryInterface, EventTrackAnalyticsUseCaseRepositoryInterface, InitEventUseCaseRepositoryInterface, ListEventUseCaseRepositoryInterface } from "../../../domain/usecase/repository/event"
import { concludeEvent, countUsersAbsentByVoiceType, countUsersPresentsByVoiceType, createEvent, getEventStarted, initEvent, listEvent } from "../../internal/database/postdresql/event"

class CreateEventUseCaseRepository implements CreateEventUseCaseRepositoryInterface {
  async createEvent(filter: EventEntity): Promise<void> {
    return createEvent(filter)
  }
}

class ListEventUseCaseRepository implements ListEventUseCaseRepositoryInterface {
  async listEvent(): Promise<EventEntity[] | null> {
    return await listEvent()
  }
}

class InitEventUseCaseRepository implements InitEventUseCaseRepositoryInterface {
  async getEventStarted(eventID: number): Promise<EventEntity | null> {
    return await getEventStarted(eventID)
  }

  async initEvent(eventID: number, date: Date): Promise<void> {
    return initEvent(eventID, date)
  }
}

class ConcludeEventUseCaseRepository implements ConcludeEventUseCaseRepositoryInterface {
  async concludeEvent(eventID: number): Promise<void> {
    return concludeEvent(eventID)
  }
}

class EventTrackAnalyticsUseCaseRepository implements EventTrackAnalyticsUseCaseRepositoryInterface {
  async countUsersAbsentByVoiceType(eventID: number, voiceType: number): Promise<number> {
    return await countUsersAbsentByVoiceType(eventID, voiceType)
  }

  async countUsersPresentsByVoiceType(eventID: number, voiceType: number): Promise<number> {
    return await countUsersPresentsByVoiceType(eventID, voiceType)
  }

  // async listUsetsRecent(eventId: number, voiceType: number): Promise<UserEntity[]> {
  //   return await listUsetsRecent(eventId, voiceType)
  // }
}

export {
  CreateEventUseCaseRepository,
  ListEventUseCaseRepository,
  InitEventUseCaseRepository,
  ConcludeEventUseCaseRepository,
  EventTrackAnalyticsUseCaseRepository
}