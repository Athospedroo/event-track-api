import express from 'express'
import { CorsRouter } from '../router/cors'


class Router {
    constructor(app: express.Router) {
        app.use(new CorsRouter().getRouter())
    }
}

export {
    Router
}