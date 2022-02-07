import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongWhereUniqueInput } from "../../../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteArtistInSongArgs {
  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;
}
