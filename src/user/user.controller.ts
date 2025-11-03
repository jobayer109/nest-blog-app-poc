import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService){}
	@Post()
	createUser(@Body('user') createUserDto: CreateUserDto) {
		return this.userService.createNewUser(createUserDto);
	}

}

