import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeUpdateInput } from "../../../inputs/ShowLikeUpdateInput";
import { ShowLikeWhereUniqueInput } from "../../../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShowLikeArgs {
  @TypeGraphQL.Field(_type => ShowLikeUpdateInput, {
    nullable: false
  })
  data!: ShowLikeUpdateInput;

  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;
}
