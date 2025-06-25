import { Injectable, Logger } from "@nestjs/common";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { HttpService } from "./http.service"
import { getServiceUrl, services } from "src/Api_config";

@Injectable()
export class UsersService{
    private readonly logger = new Logger(UsersService.name);

    constructor(private readonly httpService: HttpService){}

    async createUser(dto: CreateUserDto){
        
        try {
            const baseUrl = getServiceUrl("users_service");
            const result = await this.httpService.post(`${baseUrl}/users/new-user`, dto);
            this.logger.log(`Respuesta exitosa del servicio de usuarios: ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            this.logger.error(`Error en el servicio de usuarios: ${error.message}`, error.stack);
            throw error;
        }
    }
}