import { CmdGraphql } from "./app/graphql/cmd/server"
import { CmdRest } from "./app/rest/cmd/cmd"

const GRAPHQL = 'event-track-graphql-api'
const REST = 'event-track-rest-api'

class Main {
    public initDev(): void {
        process.env["EVENT_TRACK_REST_URI"] = 'http://192.168.64.58:8148'

        new CmdGraphql().server()
        new CmdRest().server()
    }

    async init(): Promise<void> {
        if (await this.checkEnvVar()) {
            if (process.env.SERVER == GRAPHQL) {
                new CmdGraphql().server()
            } else if (process.env.SERVER == REST) {
                new CmdRest().server()
            }
        }
    }

    async checkEnvVar(): Promise<boolean> {
        if (!process.env.SERVER) {
            console.log('env var SERVER not found')
            return false
        }

        return true
    }
}

new Main().init()
// new Main().initDev()
