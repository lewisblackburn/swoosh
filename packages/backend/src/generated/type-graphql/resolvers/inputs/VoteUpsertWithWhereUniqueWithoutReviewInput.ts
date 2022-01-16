import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateWithoutReviewInput } from "../inputs/VoteCreateWithoutReviewInput";
import { VoteUpdateWithoutReviewInput } from "../inputs/VoteUpdateWithoutReviewInput";
import { VoteWhereUniqueInput } from "../inputs/VoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpsertWithWhereUniqueWithoutReviewInput {
  @TypeGraphQL.Field(_type => VoteWhereUniqueInput, {
    nullable: false
  })
  where!: VoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => VoteUpdateWithoutReviewInput, {
    nullable: false
  })
  update!: VoteUpdateWithoutReviewInput;

  @TypeGraphQL.Field(_type => VoteCreateWithoutReviewInput, {
    nullable: false
  })
  create!: VoteCreateWithoutReviewInput;
}
