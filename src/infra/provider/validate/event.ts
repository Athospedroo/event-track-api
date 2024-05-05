import { CreateEventUseCaseRequest } from "../../../domain/usecase/ucio/event"
import { ConcludeEventUseCaseValidateInterface, CreateEventUseCaseValidateInterface, EventTrackAnalyticsUseCaseValidateInterface, InitEventUseCaseValidateInterface } from "../../../domain/usecase/validate/event"
import { checkNumberEmpty, checkStringEmpty } from "./validate"

class CreateEventUseCaseValidate implements CreateEventUseCaseValidateInterface {
  createEvent(req: CreateEventUseCaseRequest): string | null {
    if (checkStringEmpty(req.name)) 'O nome do Evento não pode ficar vazio!'

    if (checkNumberEmpty(req.voiceType)) 'O tipo de voz / nipe não pode ficar vazio'

    return null
  }
}

class InitEventUseCaseValidate implements InitEventUseCaseValidateInterface {
  async initEvent(eventID: number): Promise<string | null> {
    if (checkNumberEmpty(eventID)) 'O ID do evento não pode ficar vazio.'
    return null
  }
}

class ConcludeEventUseCaseValidate implements ConcludeEventUseCaseValidateInterface {
  concludeEvent(eventID: number): string | null {
    if (checkNumberEmpty(eventID)) 'O ID do evento não pode ficar vazio'

    return null
  }
}

class EventTrackAnalyticsUseCaseValidate implements EventTrackAnalyticsUseCaseValidateInterface {
  eventTrackAnalytics(voiceType: number): string | null {
    if (checkNumberEmpty(voiceType)) 'O Id da voz não pode ficar vazio'

    return null
  }
}

export {
  CreateEventUseCaseValidate,
  InitEventUseCaseValidate,
  ConcludeEventUseCaseValidate,
  EventTrackAnalyticsUseCaseValidate
}