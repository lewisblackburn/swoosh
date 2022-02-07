import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateArtistInSongArgs } from "./args/CreateArtistInSongArgs";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInSong)
export class CreateArtistInSongResolver {
  @TypeGraphQL.Mutation(_returns => ArtistInSong, {
    nullable: false
  })
  async createArtistInSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateArtistInSongArgs): Promise<ArtistInSong> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).artistInSong.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
