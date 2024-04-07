import https from 'https'


const REQUEST_TIMEOUT = 5000
const HTTPS_AGENT = new https.Agent({ rejectUnauthorized: false })

export {
  REQUEST_TIMEOUT,
  HTTPS_AGENT
}