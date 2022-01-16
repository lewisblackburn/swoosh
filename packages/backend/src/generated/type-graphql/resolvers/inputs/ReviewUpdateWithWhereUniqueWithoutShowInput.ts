import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewUpdateWithoutShowInput } from "../inputs/ReviewUpdateWithoutShowInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutShowInput, {
    nullable: false
  })
  data!: ReviewUpdateWithoutShowInput;
}
