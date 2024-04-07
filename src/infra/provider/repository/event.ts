import { EventEntity } from "../../../domain/entity/event"
import { ConcludeEventUseCaseRepositoryInterface, CreateEventUseCaseRepositoryInterface, InitEventUseCaseRepositoryInterface, ListEventUseCaseRepositoryInterface } from "../../../domain/usecase/repository/event"
import { concludeEvent, createEvent, getEventStarted, initEvent, listEvent } from "../../internal/database/postdresql/event"

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

export {
  CreateEventUseCaseRepository,
  ListEventUseCaseRepository,
  InitEventUseCaseRepository,
  ConcludeEventUseCaseRepository
}