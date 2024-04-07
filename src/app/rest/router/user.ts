import { Router } from "express"
import { CreateUsersByFileController } from "../controller/user"
import multer from 'multer'
import path from 'path'

const uploadDir = path.join(__dirname, '../../../infra/internal/api/public')

const upload = multer({ 
  dest: uploadDir 
})

class CreateUsersByFileRouter {
  private router: Router

  constructor() {
    this.router = Router()
    this.router.post('/createUsersByFile', upload.single('file'), new CreateUsersByFileController().createUsersByFile)
  }

  getRouter(): Router {
    return this.router
  }
}

export {
  CreateUsersByFileRouter
}
