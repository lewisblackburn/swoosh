import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewUpdateWithoutSongInput } from "../inputs/ReviewUpdateWithoutSongInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutSongInput, {
    nullable: false
  })
  data!: ReviewUpdateWithoutSongInput;
}
