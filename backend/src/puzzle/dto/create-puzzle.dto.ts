import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

//   imageUrl        String        @db.Text
//   taskText        String        @db.Text
//   size            Int           @default(600)
//   targetPositionX Float
//   targetPositionY Float
//   targetRadius    Float
//   gameSessions    GameSession[]

export class CreatePuzzleDto {
  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  taskText: string;

  @IsInt()
  @Min(100)
  @IsOptional()
  size: number;

  @IsInt()
  @Min(10)
  targetRadius: number;

  @IsNumber()
  @Min(0)
  targetPositionX: number;

  @IsNumber()
  @Min(0)
  targetPositionY: number;
}
