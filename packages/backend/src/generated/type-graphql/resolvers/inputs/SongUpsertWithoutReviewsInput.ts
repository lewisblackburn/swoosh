import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutReviewsInput } from "../inputs/SongCreateWithoutReviewsInput";
import { SongUpdateWithoutReviewsInput } from "../inputs/SongUpdateWithoutReviewsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpsertWithoutReviewsInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutReviewsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: SongCreateWithoutReviewsInput;
}
