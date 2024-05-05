import { EventEntity } from "../../entity/event"
import { UserEntity } from "../../entity/user"

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

interface EventTrackAnalyticsUseCaseRepositoryInterface {
  getEventRecentByVoiceType(voiceType: number): Promise<number | null>
  countUsersPresentsByVoiceType(eventID: number, voiceType: number): Promise<number>
  countUsersAbsentByVoiceType(eventID: number, voiceType: number): Promise<number>
  listUsersRecent(eventId: number, voiceType: number): Promise<UserEntity[] | null>
}

export {
  CreateEventUseCaseRepositoryInterface,
  ListEventUseCaseRepositoryInterface,
  InitEventUseCaseRepositoryInterface,
  ConcludeEventUseCaseRepositoryInterface,
  EventTrackAnalyticsUseCaseRepositoryInterface
}