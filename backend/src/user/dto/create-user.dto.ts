import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Role } from 'generated/prisma';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
