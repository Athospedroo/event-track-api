import https from 'https'
import axios, { Method } from 'axios'
import { InternalServerError } from '../../../../domain/entity/error'

const REQUEST_TIMEOUT = 5000
const HTTPS_AGENT = new https.Agent({ rejectUnauthorized: false })

class ServiceRestRequest {
  static async request(requestOptions: { method?: Method, url: string, data?: any }, options?: any) {
    try {
      const response = await axios({
        method: requestOptions.method || 'post',
        url: requestOptions.url,
        data: requestOptions.data,
        httpsAgent: options?.httpsAgent || HTTPS_AGENT,
        timeout: options?.timeout || REQUEST_TIMEOUT
      })

      return response?.data
    } catch (error: any) {
      return { error: new InternalServerError(error.data ? error.data.message : error.message) }
    } 
  }
} 

export {
  ServiceRestRequest
}
  