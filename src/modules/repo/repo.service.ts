import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import User from '../../models/user.entity';
import Messsage from '../../models/message.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Messsage)
    public readonly messsageRepo: Repository<Messsage>,
  ) {}
}

export default RepoService;
