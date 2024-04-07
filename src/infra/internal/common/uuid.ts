import { v4 } from 'uuid'

function generateUUID(): string {
  const uuid = v4()

  return uuid
}

export {
  generateUUID
}