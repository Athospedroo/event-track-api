import { CONCLUDED } from "../../../../domain/constants/event"
import { EventEntity } from "../../../../domain/entity/event"
import { Connection } from "./connection"
import { EventModel } from "./model/event"
import { toEventEntity, toEventModel } from "./transformer/event"

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

  await repository.update({ ID }, {  concluded: CONCLUDED })
}

export {
  createEvent,
  listEvent,
  initEvent,
  getEventStarted,
  getEventStartDate,
  concludeEvent
}