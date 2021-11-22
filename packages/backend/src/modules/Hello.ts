import {
  Query,
  Resolver,
} from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => Boolean)
  async hello() {
      return true
  }
}
