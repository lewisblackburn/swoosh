import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongCreateInput } from "../../../inputs/ArtistInSongCreateInput";
import { ArtistInSongUpdateInput } from "../../../inputs/ArtistInSongUpdateInput";
import { ArtistInSongWhereUniqueInput } from "../../../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertArtistInSongArgs {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistInSongCreateInput, {
    nullable: false
  })
  create!: ArtistInSongCreateInput;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateInput, {
    nullable: false
  })
  update!: ArtistInSongUpdateInput;
}
