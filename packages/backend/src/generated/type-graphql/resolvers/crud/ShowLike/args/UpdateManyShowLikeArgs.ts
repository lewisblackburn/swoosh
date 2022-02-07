import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeUpdateManyMutationInput } from "../../../inputs/ShowLikeUpdateManyMutationInput";
import { ShowLikeWhereInput } from "../../../inputs/ShowLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShowLikeArgs {
  @TypeGraphQL.Field(_type => ShowLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShowLikeWhereInput, {
    nullable: true
  })
  where?: ShowLikeWhereInput | undefined;
}
