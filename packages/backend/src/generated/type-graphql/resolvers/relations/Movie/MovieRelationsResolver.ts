import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { Person } from "../../../models/Person";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class MovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async actor(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        id: movie.id,
      },
    }).actor({});
  }
}
