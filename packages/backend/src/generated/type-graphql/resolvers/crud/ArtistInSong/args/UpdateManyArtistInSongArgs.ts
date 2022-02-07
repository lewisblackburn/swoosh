import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongUpdateManyMutationInput } from "../../../inputs/ArtistInSongUpdateManyMutationInput";
import { ArtistInSongWhereInput } from "../../../inputs/ArtistInSongWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyArtistInSongArgs {
  @TypeGraphQL.Field(_type => ArtistInSongUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistInSongUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ArtistInSongWhereInput, {
    nullable: true
  })
  where?: ArtistInSongWhereInput | undefined;
}
