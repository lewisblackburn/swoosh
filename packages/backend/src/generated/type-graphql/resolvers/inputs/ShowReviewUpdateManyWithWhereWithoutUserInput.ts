import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewScalarWhereInput } from "../inputs/ShowReviewScalarWhereInput";
import { ShowReviewUpdateManyMutationInput } from "../inputs/ShowReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("ShowReviewUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewScalarWhereInput, {
    nullable: false
  })
  where!: ShowReviewScalarWhereInput;

  @TypeGraphQL.Field(_type => ShowReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowReviewUpdateManyMutationInput;
}
