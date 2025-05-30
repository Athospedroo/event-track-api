import { GraphQLInt, GraphQLString } from "graphql"
import { getUserByQRCodeIDResponseType, getUserResponseType, listUsersWithPaginationResponseType } from "../type/user"
import { GetUserByQRCodeIDUseCaseResponse, GetUserUseCaseResponse, ListUsersWithPaginationUseCaseResponse } from "../../../domain/usecase/ucio/user"
import { GetUserByQRCodeIDController, GetUserController, ListUsersWithPaginationController } from "../controller/user"

const usersWithPaginationQuery = {
  usersWithPagination: {
    type: listUsersWithPaginationResponseType,
    args: {
      page: { type: GraphQLInt },
      limit: { type: GraphQLInt }
    },
    resolve: async (_: any, args: any): Promise<ListUsersWithPaginationUseCaseResponse> => {
      return await new ListUsersWithPaginationController().listUsersWithPagination(args)
    }
  }
}

const getUserQuery = {
  user: {
    type: getUserResponseType,
    args: {
      ID: { type: GraphQLString }
    },
    resolve: async (_: any, args: any): Promise<GetUserUseCaseResponse> => {
      return await new GetUserController().getUser(args)
    }
  }
}

const getUserByQRCodeIDQuery = {
  userByQRCodeID: {
    type: getUserByQRCodeIDResponseType,
    args: {
      qrCodeID: { type: GraphQLString }
    },
    resolve: async (_: any, args: any): Promise<GetUserByQRCodeIDUseCaseResponse> => {
      return await new GetUserByQRCodeIDController().getUserByQRCodeID(args)
    }
  }
}

export {
  usersWithPaginationQuery,
  getUserQuery,
  getUserByQRCodeIDQuery
}