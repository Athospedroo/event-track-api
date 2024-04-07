import { EventEntity } from "../../entity/event"

interface CreateEventUseCaseRepositoryInterface {
  createEvent(filter: EventEntity): Promise<void>
}

interface ListEventUseCaseRepositoryInterface {
  listEvent(): Promise<EventEntity[] | null>
}

interface InitEventUseCaseRepositoryInterface {
  initEvent(eventID: number, date: Date): Promise<void>
  getEventStarted(eventID: number): Promise<EventEntity | null>
}

interface ConcludeEventUseCaseRepositoryInterface {
  concludeEvent(eventID: number): Promise<void>
}
export {
  CreateEventUseCaseRepositoryInterface,
  ListEventUseCaseRepositoryInterface,
  InitEventUseCaseRepositoryInterface,
  ConcludeEventUseCaseRepositoryInterface
}