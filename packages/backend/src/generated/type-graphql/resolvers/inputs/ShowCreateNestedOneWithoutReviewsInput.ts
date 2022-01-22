import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutReviewsInput } from "../inputs/ShowCreateOrConnectWithoutReviewsInput";
import { ShowCreateWithoutReviewsInput } from "../inputs/ShowCreateWithoutReviewsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateNestedOneWithoutReviewsInput", {
  isAbstract: true
})
export class ShowCreateNestedOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => ShowCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: ShowCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowWhereUniqueInput | undefined;
}
