import { CONCLUDED } from "../../../../domain/constants/event"
import { EventEntity } from "../../../../domain/entity/event"
import { UserEntity } from "../../../../domain/entity/user"
import { Connection } from "./connection"
import { EventModel } from "./model/event"
import { toEventEntity, toEventModel } from "./transformer/event"
import { CountUsersAbsentByVoiceType, CountUsersPresentByVoiceType, GetEventRecentByVoiceTypeWrapper, ListUsersRecentWrapper } from "./wrapper/event"

async function createEvent(filter: EventEntity): Promise<void> {
  const model = toEventModel(filter)
  const conection = await Connection.getRepository(EventModel)
  await conection.save(model)
}

async function listEvent(): Promise<EventEntity[] | null> {
  const model = await Connection.getRepository(EventModel)

  const events: EventModel[] = await model.find()

  return events.length > 0 ? events.map((event: EventModel) => toEventEntity(event)) : null
}

async function initEvent(ID: number, date: Date): Promise<void> {
  const conection = await Connection.getRepository(EventModel)

  await conection.update({ ID }, { date })
}

async function getEventStarted(ID: number): Promise<EventEntity | null> {
  const repository = await Connection.getRepository(EventModel)

  const eventStarted: EventModel = await repository.findOneBy({ ID })

  return eventStarted ? toEventEntity(eventStarted) : null
}

async function getEventStartDate(ID: number): Promise<Date | null> {
  const repository = await Connection.getRepository(EventModel)

  const result = await repository.findOne({ where: { ID }, select: ['date'] })
  return result.date
}

async function concludeEvent(ID: number): Promise<void> {
  const repository = await Connection.getRepository(EventModel)

  await repository.update({ ID }, { concluded: CONCLUDED })
}

async function countUsersAbsentByVoiceType(eventID: number, voiceType: number): Promise<number> {
  const manager = await Connection.getManager()

  const wrapper = new CountUsersAbsentByVoiceType(eventID, voiceType)

  const result = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  const [{ total }] = result

  return total
}

async function countUsersPresentsByVoiceType(eventID: number, voiceType: number): Promise<number> {
  const manager = await Connection.getManager()

  const wrapper = new CountUsersPresentByVoiceType(eventID, voiceType)

  const result = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  const [{ total }] = result
  return total
}

async function listUsersRecent(eventId: number, voiceType: number): Promise<UserEntity[] | null> {
  const manager = await Connection.getManager()

  const wrapper = new ListUsersRecentWrapper(eventId, voiceType)

  const result = await manager.query(wrapper.getSQL(), wrapper.getParameters())

  return result
}

async function getEventRecentByVoiceType(voiceType: number): Promise<number | null> {
  const manager = await Connection.getManager()

  const wrapper = new GetEventRecentByVoiceTypeWrapper(voiceType)

  const result = await manager.query(wrapper.getSQL(), wrapper.getParameters())
  if (result.length > 0) {
    const [{ id }] = result
    return id ? id : null
  }
  return null
}

export {
  createEvent,
  listEvent,
  initEvent,
  getEventStarted,
  getEventStartDate,
  concludeEvent,
  countUsersAbsentByVoiceType,
  countUsersPresentsByVoiceType,
  listUsersRecent,
  getEventRecentByVoiceType
}

[ 57, 2, 0, 5 ]