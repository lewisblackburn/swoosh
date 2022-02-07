import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeCreateInput } from "../../../inputs/ShowLikeCreateInput";
import { ShowLikeUpdateInput } from "../../../inputs/ShowLikeUpdateInput";
import { ShowLikeWhereUniqueInput } from "../../../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShowLikeArgs {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowLikeCreateInput, {
    nullable: false
  })
  create!: ShowLikeCreateInput;

  @TypeGraphQL.Field(_type => ShowLikeUpdateInput, {
    nullable: false
  })
  update!: ShowLikeUpdateInput;
}
