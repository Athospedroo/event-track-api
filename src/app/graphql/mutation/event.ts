import { GraphQLInt, GraphQLString } from "graphql"
import { concludeEventResponseType, createEventResponseType, initEventResponseType } from "../type/event"
import { ConcludeEventUseCaseResponse, CreateEventUseCaseResponse, InitEventUseCaseResponse } from "../../../domain/usecase/ucio/event"
import { ConcludeEventController, CreateEventController, InitEventController } from "../controller/event"

const createEventMutation = {
  createEvent: {
    type: createEventResponseType,
    args: {
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      voiceType: { type: GraphQLInt }
    },
    resolve: async(_: any, args: any): Promise<CreateEventUseCaseResponse> => {
      return new CreateEventController().createEvent(args)
    }
  }
}

const initEventMutation  = {
  initEvent: {
    type: initEventResponseType,
    args: {
      eventID: { type: GraphQLInt }
    },
    resolve: async (_: any, args: any): Promise<InitEventUseCaseResponse> => {
      return await new InitEventController().initEvent(args)
    }
  }
}

const concludedEventMutation = {
  concludeEvent: {
    type: concludeEventResponseType,
    args: {
      eventID: { type: GraphQLInt }
    },
    resolve: async (_: any, args: any): Promise<ConcludeEventUseCaseResponse> => {
      return await new ConcludeEventController().concludeEvent(args)
    }
  }
}

export {
  createEventMutation,
  initEventMutation,
  concludedEventMutation
}