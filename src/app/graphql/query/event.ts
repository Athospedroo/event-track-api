import { ListEventUseCaseResponse } from "../../../domain/usecase/ucio/event"
import { ListEventController } from "../controller/event"
import { listEventResponseType } from "../type/event"

const listEventTypeQuery = {
  eventType: {
    type: listEventResponseType,
    fields: {},
    resolve: async (_: any): Promise<ListEventUseCaseResponse> => {
      return await new ListEventController().listEvent()
    }
  }
}

export {
  listEventTypeQuery
}