import { ConcludeEventUseCase, CreateEventUseCase, InitEventUseCase, ListEventUseCase } from "../../../domain/usecase/event"
import { ConcludeEventUseCaseRequest, ConcludeEventUseCaseResponse, CreateEventUseCaseRequest, CreateEventUseCaseResponse, InitEventUseCaseRequest, InitEventUseCaseResponse, ListEventUseCaseResponse } from "../../../domain/usecase/ucio/event"
import { ConcludeEventUseCaseRepository, CreateEventUseCaseRepository, InitEventUseCaseRepository, ListEventUseCaseRepository } from "../../../infra/provider/repository/event"
import { ConcludeEventUseCaseValidate, CreateEventUseCaseValidate, InitEventUseCaseValidate } from "../../../infra/provider/validate/event"

class CreateEventController {
  async createEvent(args: any): Promise<CreateEventUseCaseResponse> {
    const { name, description, voiceType } = args

    const ucReq = new CreateEventUseCaseRequest(name, description, voiceType)

    const validate = new CreateEventUseCaseValidate()
    const repository = new CreateEventUseCaseRepository()

    const usecase = new CreateEventUseCase(validate, repository)

    return await usecase.createEvent(ucReq)
  }
}

class ListEventController {
  async listEvent(): Promise<ListEventUseCaseResponse> {
    const repository = new ListEventUseCaseRepository()

    const usecase = new ListEventUseCase(repository)

    return await usecase.listEvent()
  }
}

class InitEventController {
  async initEvent(args: any): Promise<InitEventUseCaseResponse> {
    const { eventID } = args

    const ucReq = new InitEventUseCaseRequest(eventID)

    const validate = new InitEventUseCaseValidate()
    const repository = new InitEventUseCaseRepository()

    const usecase = new InitEventUseCase(validate, repository)

    return await usecase.initEvent(ucReq)
  }
}

class ConcludeEventController {
  async concludeEvent(args: any): Promise<ConcludeEventUseCaseResponse> {
    const { eventID } = args

    const ucReq = new ConcludeEventUseCaseRequest(eventID)

    const validate = new ConcludeEventUseCaseValidate()
    const repository = new ConcludeEventUseCaseRepository()

    const usecase = new ConcludeEventUseCase(validate, repository)

    return await usecase.concludeEvent(ucReq)
  }
}
export {
  CreateEventController,
  ListEventController,
  InitEventController,
  ConcludeEventController
}