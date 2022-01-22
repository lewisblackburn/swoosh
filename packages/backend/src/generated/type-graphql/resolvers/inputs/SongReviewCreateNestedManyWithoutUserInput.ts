import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateManyUserInputEnvelope } from "../inputs/SongReviewCreateManyUserInputEnvelope";
import { SongReviewCreateOrConnectWithoutUserInput } from "../inputs/SongReviewCreateOrConnectWithoutUserInput";
import { SongReviewCreateWithoutUserInput } from "../inputs/SongReviewCreateWithoutUserInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SongReviewCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: SongReviewWhereUniqueInput[] | undefined;
}
