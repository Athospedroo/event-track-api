const envPort = process.env.PORT
let PORT = 8079

if (envPort) {
    PORT = parseInt(envPort, 10) 
}

export {
    PORT
}
