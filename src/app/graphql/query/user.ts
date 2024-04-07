import { GraphQLInt, GraphQLString } from "graphql"
import { getUserResponseType, listUsersWithPaginationResponseType } from "../type/user"
import { GetUserUseCaseResponse, ListUsersWithPaginationUseCaseResponse } from "../../../domain/usecase/ucio/user"
import { GetUserController, ListUsersWithPaginationController } from "../controller/user"

const usersWithPaginationQuery = {
  usersWithPagination: {
    type: listUsersWithPaginationResponseType,
    args: {
      page: { type: GraphQLInt },
      limit: { type: GraphQLInt }
    },
    resolve: async(_: any, args: any): Promise<ListUsersWithPaginationUseCaseResponse> => {
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
    resolve: async(_: any, args: any): Promise<GetUserUseCaseResponse> => {
      return await new GetUserController().getUser(args)
    }
  }
}

export {
  usersWithPaginationQuery,
  getUserQuery
}