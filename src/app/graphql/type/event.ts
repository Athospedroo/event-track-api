import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"

const eventType = new GraphQLObjectType({
  name: 'eventType',
  fields: {
    ID: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    voiceType: { type: GraphQLInt },
    concluded: { type: GraphQLInt },
    date: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  }
})

const createEventResponseType = new GraphQLObjectType({
  name: 'createEventResponseType',
  fields: {
    error: { type: errorType }
  }
})

const listEventResponseType = new GraphQLObjectType({
  name: 'listEventResponseType',
  fields: {
    events: { type: new GraphQLList(eventType) },
    error: { type: errorType }
  }
})

const initEventResponseType = new GraphQLObjectType({
  name: 'initEventResponseType',
  fields: {
    error: { type: errorType }
  }
})

const concludeEventResponseType = new GraphQLObjectType({
  name: 'concludeEventResponseType',
  fields: {
    error: { type: errorType }
  }
})

export {
  createEventResponseType,
  eventType,
  listEventResponseType,
  initEventResponseType,
  concludeEventResponseType
}