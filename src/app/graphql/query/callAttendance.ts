import { GraphQLInt, GraphQLString } from "graphql"
import { listUserCallAttendanceAbsentResponseType, listUserCallAttendancePresentResponseType, listUsersCallAttendanceResponseType } from "../type/callAttendance"
import { ListUserCallAttendanceAbsentUseCaseResponse, ListUserCallAttendancePresentUseCaseResponse, ListUsersCallAttendanceUseCaseResponse } from "../../../domain/usecase/ucio/callAttendance"
import { ListUserCallAttendanceAbsentController, ListUserCallAttendancePresentController, ListUsersCallAttendanceController } from "../controller/callAttendance"

const listUserCallAttendancePresentQuery = {
  userCallAttendancePresent: {
    type: listUserCallAttendancePresentResponseType,
    args: {
      voiceType: { type: GraphQLInt },
      page: { type: GraphQLInt },
      initialDate: { type: GraphQLString },
      finalDate: { type: GraphQLString }
    },
    resolve: async (_: any, args: any): Promise<ListUserCallAttendancePresentUseCaseResponse> => {
      return await new ListUserCallAttendancePresentController().listUserCallAttendancePresent(args)
    }
  }
}

const listUserCallAttendanceAbsentQuery = {
  userCallAttendanceAbsent: {
    type: listUserCallAttendanceAbsentResponseType,
    args: {
      voiceType: { type: GraphQLInt },
      page: { type: GraphQLInt },
      initialDate: { type: GraphQLString },
      finalDate: { type: GraphQLString }
    },
    resolve: async (_: any, args: any): Promise<ListUserCallAttendanceAbsentUseCaseResponse> => {
      return await new ListUserCallAttendanceAbsentController().listUserCallAttendanceAbsent(args)
    }
  }
}

const listUsersCallAttendaceQuery = {
  usersCallAttendance: {
    type: listUsersCallAttendanceResponseType,
    args: {
      voiceType: { type: GraphQLInt }
    },
    resolve: async (_: any, args: any): Promise<ListUsersCallAttendanceUseCaseResponse> => {
      return await new ListUsersCallAttendanceController().listUsersCallAttendance(args)
    }
  }
}

export {
  listUserCallAttendanceAbsentQuery,
  listUserCallAttendancePresentQuery,
  listUsersCallAttendaceQuery
}