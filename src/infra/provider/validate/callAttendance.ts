import { ListUsersCallAttendancePresenceOrAbsentFilter, RegisterUserCallAttendanceFilter } from "../../../domain/entity/callAttendance"
import { RemoveUserCallAttendanceUseCaseRequest } from "../../../domain/usecase/ucio/callAttendance"
import { ListUserCallAttendanceAbsentUseCaseValidateInterface, ListUserCallAttendancePresentUseCaseValidateInterface, ListUsersCallAttendanceUseCaseValidateInterface, RegisterUserCallAttendanceUseCaseValidateInterface, RemoveUserCallAttendanceUseCaseValidateInterface } from "../../../domain/usecase/validate/callAttendance"
import { getUserPresentCallAttendance } from "../../internal/database/postdresql/callAttendance"
import { checkDateEmpty, checkNumberEmpty, checkStringEmpty } from "./validate"

class RegisterUserCallAttendanceUseCaseValidate implements RegisterUserCallAttendanceUseCaseValidateInterface {
  async registerUserCallAttendance(filter: RegisterUserCallAttendanceFilter): Promise<string | null> {
    if (checkStringEmpty(filter.userAdmID)) 'O ID do usuário adm não pode ficar vazio bença!'
    if (await getUserPresentCallAttendance(filter.userID)) return 'Esse usuario já está presente!'
    if (checkStringEmpty(filter.userID)) 'O ID do participante não pode ficar vazio terra seca'
    return null
  }
}

class RemoveUserCallAttendanceUseCaseValidate implements RemoveUserCallAttendanceUseCaseValidateInterface {
  async removeUserCallAttendance(req: RemoveUserCallAttendanceUseCaseRequest): Promise<string | null> {
    if (checkStringEmpty(req.userID)) 'O ID do componente não pode fica vazio TERAAAAA!'
    if (checkDateEmpty(req.updatedAt)) 'A data não pode ficar vazia!'
    if (checkStringEmpty(req.userAdmID)) return 'O ID do ADM não pode ficar vazio!'
    return null
  }
}

class ListUserCallAttendancePresentUseCaseValidate implements ListUserCallAttendancePresentUseCaseValidateInterface {
  listUserCallAttendance(filter: ListUsersCallAttendancePresenceOrAbsentFilter): string | null {
    if (checkNumberEmpty(filter.voiceType)) 'O ID da vós não pode ficar vazio!'

    return null
  }
}

class ListUserCallAttendanceAbsentUseCaseValidate implements ListUserCallAttendanceAbsentUseCaseValidateInterface {
  listUserCallAttendanceAbsent(filter: ListUsersCallAttendancePresenceOrAbsentFilter): string | null {
    if (checkNumberEmpty(filter.voiceType)) 'O ID da vós não pode ficar vazio!'

    return null
  }
}

class ListUsersCallAttendanceuseCaseValidate implements ListUsersCallAttendanceUseCaseValidateInterface {
  listUsersCallAttendance(voiceType: number): string | null {
    if (checkNumberEmpty(voiceType)) 'O tipo da voz não pode ficar vazio !'

    return null
  }
}
export {
  RegisterUserCallAttendanceUseCaseValidate,
  RemoveUserCallAttendanceUseCaseValidate,
  ListUserCallAttendanceAbsentUseCaseValidate,
  ListUserCallAttendancePresentUseCaseValidate,
  ListUsersCallAttendanceuseCaseValidate
}