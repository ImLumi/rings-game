import { PartialType } from '@nestjs/mapped-types';
import { CreatePuzzleDto } from './create-puzzle.dto';

export class UpdateUserDto extends PartialType(CreatePuzzleDto) {}
