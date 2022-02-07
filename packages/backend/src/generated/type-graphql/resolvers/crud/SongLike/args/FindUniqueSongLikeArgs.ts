import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeWhereUniqueInput } from "../../../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;
}
