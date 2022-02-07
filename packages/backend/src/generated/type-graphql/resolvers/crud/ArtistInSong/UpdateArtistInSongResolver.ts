import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateArtistInSongArgs } from "./args/UpdateArtistInSongArgs";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInSong)
export class UpdateArtistInSongResolver {
  @TypeGraphQL.Mutation(_returns => ArtistInSong, {
    nullable: true
  })
  async updateArtistInSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateArtistInSongArgs): Promise<ArtistInSong | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistInSong.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
