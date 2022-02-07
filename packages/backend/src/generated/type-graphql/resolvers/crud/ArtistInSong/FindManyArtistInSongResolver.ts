import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyArtistInSongArgs } from "./args/FindManyArtistInSongArgs";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInSong)
export class FindManyArtistInSongResolver {
  @TypeGraphQL.Query(_returns => [ArtistInSong], {
    nullable: false
  })
  async artistInSongs(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyArtistInSongArgs): Promise<ArtistInSong[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistInSong.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
