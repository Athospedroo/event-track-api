import jwt from 'jsonwebtoken'
import { SECRET_KEY } from './config/config'

function encodeParams(params: string): string {
    return jwt.sign({ params }, SECRET_KEY)
}

function decodeToken(token: string): string {
    return JSON.stringify(jwt.verify(token, SECRET_KEY))
}

export {
    encodeParams,
    decodeToken
}