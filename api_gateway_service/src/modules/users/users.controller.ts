import { Body, Controller, Post, Logger } from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";

import { UsersService } from "src/services/users.service";

@Controller("users")
export class UsersController {
    private readonly logger = new Logger(UsersController.name);

    constructor(private readonly usersService: UsersService){}

    @Post("new-user")
    async create(@Body() createUserDto: CreateUserDto){
        this.logger.log(`Petición recibida del frontend: ${JSON.stringify(createUserDto)}`);
        
        try {
            const result = await this.usersService.createUser(createUserDto);
            this.logger.log(`Respuesta enviada al frontend: ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            this.logger.error(`Error procesando petición: ${error.message}`, error.stack);
            throw error;
        }
    }
}