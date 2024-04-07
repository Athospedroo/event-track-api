import { GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { errorType } from "./error"
import { userType } from "./user"

const callAttendanceType = new GraphQLObjectType({
  name: 'callAttendanceType',
  fields: {
    ID: { type: GraphQLInt },
    userAdmID: { type: GraphQLString },
    userID: { type: GraphQLString },
    presence: { type: GraphQLInt },
    badgeChecked: { type: GraphQLInt }
  }
})

const usersCallAttendanceType = new GraphQLObjectType({
  name: 'usersCallAttendaceType',
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
    isDeleted: { type: GraphQLInt },
    presence: { type: GraphQLBoolean },
    badgeChecked: { type: GraphQLInt },
    phone: { type: GraphQLString },
    shirtSize: { type: GraphQLString },
    userType: { type: GraphQLInt },
    userDateBirth: { type: GraphQLString }
  }
})

const registerUserCallAttendanceResponseType = new GraphQLObjectType({
  name: 'egisterUserCallAttendanceResponseType',
  fields: {
    error: { type: errorType }
  }
})

const removeUserCallAttendaceResponseType = new GraphQLObjectType({
  name: 'removeUserCallAttendanceResponseType',
  fields: {
    error: { type: errorType }
  }
})

const listUserCallAttendanceAbsentResponseType = new GraphQLObjectType({
  name: 'listUserCallAttendanceAbsentResponseType',
  fields: {
    users: { type: new GraphQLList(userType) },
    count: { type: GraphQLInt },
    error: { type: errorType }
  }
})

const listUserCallAttendancePresentResponseType = new GraphQLObjectType({
  name: 'listUserCallAttendancePresentResponseType',
  fields: {
    users: { type: new GraphQLList(userType) },
    count: { type: GraphQLInt },
    error: { type: errorType }
  }
})

const listUsersCallAttendanceResponseType = new GraphQLObjectType({
  name: 'listUsersCallAttendanceResponseType',
  fields: {
    usersCallAttendance: { type: new GraphQLList(usersCallAttendanceType)},
    error: { type: errorType }
  }
})

export {
  registerUserCallAttendanceResponseType,
  callAttendanceType,
  removeUserCallAttendaceResponseType,
  listUserCallAttendancePresentResponseType,
  listUserCallAttendanceAbsentResponseType,
  listUsersCallAttendanceResponseType
}

