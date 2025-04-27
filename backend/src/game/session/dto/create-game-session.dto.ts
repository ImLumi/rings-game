import {
  IsInt,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsString,
} from 'class-validator';

export class CreateGameSessionDto {
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  puzzles: number[];

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsString({ each: true })
  players: string[];
}
