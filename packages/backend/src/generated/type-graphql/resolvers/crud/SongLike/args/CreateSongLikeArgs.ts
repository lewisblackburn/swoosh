import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeCreateInput } from "../../../inputs/SongLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeCreateInput, {
    nullable: false
  })
  data!: SongLikeCreateInput;
}
