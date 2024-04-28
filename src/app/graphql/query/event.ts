import { GraphQLInt } from "graphql"
import { EventTrackAnalyticsUseCaseResponse, ListEventUseCaseResponse } from "../../../domain/usecase/ucio/event"
import { EventTrackAnalyticsController, ListEventController } from "../controller/event"
import { eventTrackAnalyticsResponseType, listEventResponseType } from "../type/event"

const listEventTypeQuery = {
  eventType: {
    type: listEventResponseType,
    fields: {},
    resolve: async (_: any): Promise<ListEventUseCaseResponse> => {
      return await new ListEventController().listEvent()
    }
  }
}

const eventTrackAnalyticsQuery = {
  eventTrackAnalytics: {
    type: eventTrackAnalyticsResponseType,
    fields: {
      eventID: { type: GraphQLInt },
      voiceType: { type: GraphQLInt }
    },
    resolve: async (_: any, args: any): Promise<EventTrackAnalyticsUseCaseResponse> => {
      return await new EventTrackAnalyticsController().eventTRackAnalytics(args)
    }
  }
}

export {
  listEventTypeQuery,
  eventTrackAnalyticsQuery
}