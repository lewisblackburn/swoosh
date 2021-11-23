import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Movie } from "../../../models/Movie";
import { Person } from "../../../models/Person";
import { Song } from "../../../models/Song";
import { PersonBooksArgs } from "./args/PersonBooksArgs";
import { PersonMoviesArgs } from "./args/PersonMoviesArgs";
import { PersonSongsArgs } from "./args/PersonSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class PersonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).movies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).songs(args);
  }
}
