import * as TypeGraphQL from "type-graphql";
import { Person } from "../../../models/Person";
import { Song } from "../../../models/Song";
import { SongArtistsArgs } from "./args/SongArtistsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Person], {
    nullable: false
  })
  async artists(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongArtistsArgs): Promise<Person[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).artists(args);
  }
}
