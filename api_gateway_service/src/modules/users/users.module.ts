import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "src/services/users.service";
import { HttpService } from "src/services/http.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService, HttpService]
})

export class UsersModule {}