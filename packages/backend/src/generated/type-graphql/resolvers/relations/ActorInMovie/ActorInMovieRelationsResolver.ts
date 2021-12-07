import * as TypeGraphQL from "type-graphql";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { Movie } from "../../../models/Movie";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInMovie)
export class ActorInMovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() actorInMovie: ActorInMovie, @TypeGraphQL.Ctx() ctx: any): Promise<Movie> {
    return getPrismaFromContext(ctx).actorInMovie.findUnique({
      where: {
        personId_movieId: {
          personId: actorInMovie.personId,
          movieId: actorInMovie.movieId,
        },
      },
    }).movie({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() actorInMovie: ActorInMovie, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).actorInMovie.findUnique({
      where: {
        personId_movieId: {
          personId: actorInMovie.personId,
          movieId: actorInMovie.movieId,
        },
      },
    }).person({});
  }
}
