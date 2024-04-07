import { EventEntity } from "../../../../../domain/entity/event"
import { EventModel } from "../model/event"

function toEventEntity(m: EventModel): EventEntity {
  return new EventEntity(
    m.ID,
    m.name,
    m.description,
    m.voiceType,
    m.concluded,
    m.date,
    m.createdAt,
    m.updatedAt
  )
}

function toEventModel(e: EventEntity): EventModel {
  return new EventEntity(
    e.ID,
    e.name,
    e.description,
    e.voiceType,
    e.concluded,
    e.date,
    e.createdAt,
    e.updatedAt
  )
}

export {
  toEventEntity,
  toEventModel
}