import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateManyReviewInputEnvelope } from "../inputs/VoteCreateManyReviewInputEnvelope";
import { VoteCreateOrConnectWithoutReviewInput } from "../inputs/VoteCreateOrConnectWithoutReviewInput";
import { VoteCreateWithoutReviewInput } from "../inputs/VoteCreateWithoutReviewInput";
import { VoteWhereUniqueInput } from "../inputs/VoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateNestedManyWithoutReviewInput {
  @TypeGraphQL.Field(_type => [VoteCreateWithoutReviewInput], {
    nullable: true
  })
  create?: VoteCreateWithoutReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteCreateOrConnectWithoutReviewInput], {
    nullable: true
  })
  connectOrCreate?: VoteCreateOrConnectWithoutReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => VoteCreateManyReviewInputEnvelope, {
    nullable: true
  })
  createMany?: VoteCreateManyReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereUniqueInput], {
    nullable: true
  })
  connect?: VoteWhereUniqueInput[] | undefined;
}
