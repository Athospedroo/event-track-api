import { GraphQLInt, GraphQLString } from "graphql"
import { registerUserCallAttendanceResponseType, removeUserCallAttendaceResponseType } from "../type/callAttendance"
import { RegisterUserCallAttendanceUseCaseResponse, RemoveUserCallAttendanceUseCaseResponse } from "../../../domain/usecase/ucio/callAttendance"
import { RegisterUserCallAttendanceController, RemoveUserCallAttendanceController } from "../controller/callAttendance"

const registerUserCallAttendanceMutation = {
  registerUserCallAttendance: {
    type: registerUserCallAttendanceResponseType,
    args: {
      userID: { type: GraphQLString },
      userAdmID: { type: GraphQLString },
      eventID: { type: GraphQLInt },
      presence: { type: GraphQLInt },
      badgeChecked: { type: GraphQLInt },
      justifieldAbsentType: { type: GraphQLInt }
    },
    resolve: async(_: any, args: any): Promise<RegisterUserCallAttendanceUseCaseResponse> => {
      return await new RegisterUserCallAttendanceController().registerUserCallAttendance(args)
    }
  }
}

const removeUserCallAttendanceMutation = {
  removerUserCallAttendace: {
    type: removeUserCallAttendaceResponseType,
    args: {
      userID: { type: GraphQLString },
      userAdmID: { type: GraphQLString },
      updatedAt: { type: GraphQLString }
    },
    resolve: async (_: any, args: any): Promise<RemoveUserCallAttendanceUseCaseResponse> => {
      return await new RemoveUserCallAttendanceController().removeUserCallAttendance(args)
    }
  }
}

export {
  registerUserCallAttendanceMutation, 
  removeUserCallAttendanceMutation
}