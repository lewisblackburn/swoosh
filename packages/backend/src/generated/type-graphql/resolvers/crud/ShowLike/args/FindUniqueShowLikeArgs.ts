import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeWhereUniqueInput } from "../../../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShowLikeArgs {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;
}
