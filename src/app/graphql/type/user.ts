import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"

const userType = new GraphQLObjectType({
  name: 'userType',
  fields: {
    ID: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    voiceType: { type: GraphQLInt },
    memberCard: { type: GraphQLString },
    badgeNumber: { type: GraphQLInt },
    churchName: { type: GraphQLString },
    areaNumber: { type: GraphQLString },
    isActive: { type: GraphQLInt },
    isDeleted: { type: GraphQLInt }
  }
})

const listUsersWithPaginationResponseType = new GraphQLObjectType({ 
  name: 'listUsersWithPaginationResponseType',
  fields: {
    users: { type: new GraphQLList(userType) },
    count: { type: GraphQLInt },
    error: { type: errorType }
  }
})

const getUserResponseType = new GraphQLObjectType({
  name: 'getUserResponseType',
  fields: {
    user: { type: userType },
    error: { type: errorType }
  }
})

export {
  listUsersWithPaginationResponseType,
  userType,
  getUserResponseType
}