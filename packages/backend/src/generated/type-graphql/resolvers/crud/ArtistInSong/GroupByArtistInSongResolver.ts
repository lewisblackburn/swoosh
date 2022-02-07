import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByArtistInSongArgs } from "./args/GroupByArtistInSongArgs";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { ArtistInSongGroupBy } from "../../outputs/ArtistInSongGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInSong)
export class GroupByArtistInSongResolver {
  @TypeGraphQL.Query(_returns => [ArtistInSongGroupBy], {
    nullable: false
  })
  async groupByArtistInSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArtistInSongArgs): Promise<ArtistInSongGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistInSong.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
