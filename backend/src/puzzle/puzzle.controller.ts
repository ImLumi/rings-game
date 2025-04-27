import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PuzzleService } from './puzzle.service';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { UpdateUserDto } from './dto/update-puzzle.dto';
import { Prisma } from 'generated/prisma';

@Controller('puzzle')
export class PuzzleController {
  constructor(private readonly puzzleService: PuzzleService) {}

  @Post()
  createPuzzle(@Body() createPuzzleDto: CreatePuzzleDto) {
    return this.puzzleService.create(createPuzzleDto);
  }

  @Get()
  getAllPuzzles(
    @Query('cursor') cursor?: number,
    @Query('limit') limit?: number,
  ) {
    return this.puzzleService.findAll({ cursor, limit });
  }

  @Get(':id')
  async getPuzzleById(@Param('id') id: number) {
    const puzzle = await this.puzzleService.findById(id);
    if (!puzzle) {
      throw new NotFoundException(`Puzzle with id ${id} not found`);
    }
    return puzzle;
  }

  @Patch(':id')
  async updatePuzzle(
    @Param('id') id: number,
    @Body() updatePuzzleDto: UpdateUserDto,
  ) {
    const puzzle = await this.puzzleService
      .update(id, updatePuzzleDto)
      .catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError)
          if (e.code == 'P2025')
            throw new NotFoundException(`Puzzle with id ${id} not found`);
        throw e;
      });

    return puzzle;
  }

  @Delete(':id')
  async deletePuzzle(@Param('id') id: number) {
    const puzzle = await this.puzzleService.delete(id).catch((e) => {
      if (e instanceof Prisma.PrismaClientKnownRequestError)
        if (e.code == 'P2025')
          throw new NotFoundException(`Puzzle with id ${id} not found`);
      throw e;
    });
    return puzzle;
  }
}
