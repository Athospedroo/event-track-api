import { GraphQLObjectType, GraphQLSchema } from "graphql"

import { usersWithPaginationQuery, getUserQuery } from '../query/user'
import { registerUserCallAttendanceMutation, removeUserCallAttendanceMutation } from '../mutation/callAttendance'
import { listUserCallAttendanceAbsentQuery, listUserCallAttendancePresentQuery, listUsersCallAttendaceQuery } from '../query/callAttendance'
import { createEventMutation, initEventMutation, concludedEventMutation } from '../mutation/event'
import { listEventTypeQuery, eventTrackAnalyticsQuery } from '../query/event'

const schema = new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...usersWithPaginationQuery,
            ...listUserCallAttendanceAbsentQuery,
            ...listUserCallAttendancePresentQuery,
            ...listEventTypeQuery,
            ...listUsersCallAttendaceQuery,
            ...getUserQuery,
            ...eventTrackAnalyticsQuery
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            ...registerUserCallAttendanceMutation,
            ...removeUserCallAttendanceMutation,
            ...createEventMutation,
            ...initEventMutation,
            ...concludedEventMutation
        })
    })
})

export { schema }