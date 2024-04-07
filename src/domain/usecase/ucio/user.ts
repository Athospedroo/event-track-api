import { ErrorEntity } from "../../entity/error"
import { UserEntity } from "../../entity/user"

class CreateUsersByFileUseCaseRequest {
	public file: any

	constructor(file: any) {
		this.file = file
	}
}

class CreateUsersByFileUseCaseResponse {
	public error: ErrorEntity | null

	constructor(error: ErrorEntity | null) {
		this.error = error
	}
}

class ListUsersWithPaginationUseCaseRequest {
	public page: number
	public limit: number

	constructor(page: number, limit: number) {
		this.page = page
		this.limit = limit
	}
}

class ListUsersWithPaginationUseCaseResponse {
	public users: UserEntity[] | null
	public count: number | null
	public error: ErrorEntity | null

	constructor(users: UserEntity[] | null, count: number | null, error: ErrorEntity | null) {
		this.users = users
		this.count = count
		this.error = error
	}
}

class GetUserUseCaseRequest {
	ID: string

	constructor(ID: string) {
		this.ID = ID
	}
}

class GetUserUseCaseResponse {
	user: UserEntity | null
	error: ErrorEntity | null

	constructor(user: UserEntity | null, error: ErrorEntity | null) {
		this.user = user
		this.error = error
	}
}

export {
	CreateUsersByFileUseCaseRequest,
	CreateUsersByFileUseCaseResponse,
	ListUsersWithPaginationUseCaseRequest,
	ListUsersWithPaginationUseCaseResponse,
	GetUserUseCaseRequest,
	GetUserUseCaseResponse
}