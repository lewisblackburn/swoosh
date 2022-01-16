import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManySongInputEnvelope } from "../inputs/ReviewCreateManySongInputEnvelope";
import { ReviewCreateOrConnectWithoutSongInput } from "../inputs/ReviewCreateOrConnectWithoutSongInput";
import { ReviewCreateWithoutSongInput } from "../inputs/ReviewCreateWithoutSongInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutSongInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
