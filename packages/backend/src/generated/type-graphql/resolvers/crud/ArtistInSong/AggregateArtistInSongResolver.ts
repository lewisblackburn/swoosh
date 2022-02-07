import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateArtistInSongArgs } from "./args/AggregateArtistInSongArgs";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { AggregateArtistInSong } from "../../outputs/AggregateArtistInSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInSong)
export class AggregateArtistInSongResolver {
  @TypeGraphQL.Query(_returns => AggregateArtistInSong, {
    nullable: false
  })
  async aggregateArtistInSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistInSongArgs): Promise<AggregateArtistInSong> {
    return getPrismaFromContext(ctx).artistInSong.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
