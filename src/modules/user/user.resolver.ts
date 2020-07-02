import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import RepoService from '../repo/repo.service';
import User from '../../models/user.entity';
import UserInput from './inputs/user.input';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return await this.repoService.userRepo.find();
  }

  // BUG: Não funciona
  @Query(() => [User])
  public async getUser(@Args('id') id: number): Promise<User> {
    const user = await this.repoService.userRepo.findOne(id);
    return user;
  }

  @Mutation(() => User)
  public async createUser(@Args('data') input: UserInput): Promise<User> {
    const user = this.repoService.userRepo.create({ email: input.email });
    return await this.repoService.userRepo.save(user);
  }
}
