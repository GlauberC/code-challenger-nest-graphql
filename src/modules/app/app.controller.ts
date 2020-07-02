import { Controller, Get } from '@nestjs/common';
import RepoService from '../repo/repo.service';

@Controller()
export class AppController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  async getHello(): Promise<string> {
    return `Total messages: ${await this.repoService.messsageRepo.count()}`;
  }
}
