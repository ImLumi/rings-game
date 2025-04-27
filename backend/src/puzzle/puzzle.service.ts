import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PuzzleService {
  constructor(private readonly prisma: PrismaService) {}

  create(puzzleData: Prisma.PuzzleCreateInput) {
    return this.prisma.puzzle.create({
      data: {
        ...puzzleData,
      },
    });
  }

  findById(id: number) {
    return this.prisma.puzzle.findUnique({
      where: { id },
    });
  }

  findAll({ cursor, limit = 10 }: { cursor?: number; limit?: number } = {}) {
    console.log('cursor', cursor);
    console.log('limit', limit);
    const prismaCursor = cursor ? { id: cursor } : undefined;
    return this.prisma.puzzle.findMany({
      skip: cursor ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'asc',
      },
      cursor: prismaCursor,
    });
  }

  update(id: number, puzzleData: Prisma.PuzzleUpdateInput) {
    return this.prisma.puzzle.update({
      where: { id },
      data: {
        ...puzzleData,
      },
    });
  }
  delete(id: number) {
    return this.prisma.puzzle.delete({
      where: { id },
    });
  }
}
