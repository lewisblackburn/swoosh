import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewUpdateManyMutationInput } from "../../../inputs/ShowReviewUpdateManyMutationInput";
import { ShowReviewWhereInput } from "../../../inputs/ShowReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  where?: ShowReviewWhereInput | undefined;
}
