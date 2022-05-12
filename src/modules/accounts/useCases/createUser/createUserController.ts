import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, username, email, password, driver_license } = request.body;
		await this.createUserUseCase.execute({ name, username, email, password, driver_license });
		return response.status(201).send();
	}
}

export { CreateUserController };