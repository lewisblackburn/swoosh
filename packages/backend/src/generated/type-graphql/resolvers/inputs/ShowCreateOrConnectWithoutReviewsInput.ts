import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutReviewsInput } from "../inputs/ShowCreateWithoutReviewsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowCreateOrConnectWithoutReviewsInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: ShowCreateWithoutReviewsInput;
}
