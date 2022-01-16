import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutMovieInput } from "../inputs/ReviewCreateWithoutMovieInput";
import { ReviewUpdateWithoutMovieInput } from "../inputs/ReviewUpdateWithoutMovieInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: ReviewUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutMovieInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutMovieInput;
}
