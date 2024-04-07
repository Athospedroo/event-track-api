import express from 'express'
import { CorsRouter } from '../router/cors'
import { CreateUsersByFileRouter } from './user'

class Router {
    constructor(app: express.Router) {
        app.use(new CorsRouter().getRouter())
        app.use(new CreateUsersByFileRouter().getRouter())
    }
}

export {
    Router
}