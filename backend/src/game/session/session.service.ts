import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma.service';
// import { Prisma } from 'generated/prisma';

@Injectable()
export class SessionService {
  private counter = 0;
  // constructor(private readonly prisma: PrismaService) {}
  // create(sessionData: Prisma.SessionCreateInput) {
  //   return this.prisma.session.create({
  //     data: {
  //       ...sessionData,
  //     },
  //   });
  // }
}
