import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'generated/prisma';
import { ResponseUser } from './user-interface';
import { omit } from 'src/common/util/helper';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseUser> {
    if (createUserDto?.role === 'admin') {
      if (!createUserDto?.email || !createUserDto?.password) {
        throw new HttpException('Email and password are required', 400);
      }
    }
    if (createUserDto.password && !createUserDto?.email)
      throw new BadRequestException(
        'Email is required when password is provided',
      );

    let user: User | null = null;
    if (createUserDto.password) {
      const hashedPassword = await this.authService.hashPassword(
        createUserDto.password,
      );
      user = await this.prisma.user.create({
        data: { ...createUserDto, password: hashedPassword },
      });
    } else {
      user = await this.prisma.user.create({
        data: createUserDto,
      });
    }

    if (!user) throw new HttpException('User not created', 400);

    const responseUser = omit(user, ['password', 'accessToken']);
    return responseUser;
  }

  findAll(): Promise<ResponseUser[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<ResponseUser | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    if ('password' in updateUserDto) {
      delete updateUserDto.password;
    }
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
