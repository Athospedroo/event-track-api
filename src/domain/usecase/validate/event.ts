import { CreateEventUseCaseRequest } from "../ucio/event";

interface CreateEventUseCaseValidateInterface {
  createEvent(req: CreateEventUseCaseRequest): string | null
}

interface InitEventUseCaseValidateInterface {
  initEvent(eventID: number): Promise<string | null>
}

interface ConcludeEventUseCaseValidateInterface {
  concludeEvent(eventID: number): string | null
}

export {
  CreateEventUseCaseValidateInterface,
  InitEventUseCaseValidateInterface,
  ConcludeEventUseCaseValidateInterface
}