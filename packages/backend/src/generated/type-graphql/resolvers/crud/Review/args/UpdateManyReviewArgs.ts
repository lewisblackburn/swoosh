import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewUpdateManyMutationInput } from "../../../inputs/ReviewUpdateManyMutationInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReviewArgs {
  @TypeGraphQL.Field(_type => ReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReviewWhereInput, {
    nullable: true
  })
  where?: ReviewWhereInput | undefined;
}
