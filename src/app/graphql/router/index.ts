import express from 'express'
import { CorsRouter } from './cors'
import { GraphqlRouter } from './graphql'

class Router {
    constructor(app: express.Router) {
        app.use(new CorsRouter().getRouter())
        app.use(new GraphqlRouter().getRouter())
    }
}

export {
    Router
}