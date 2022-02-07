import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateManyUserInputEnvelope } from "../inputs/ShowLikeCreateManyUserInputEnvelope";
import { ShowLikeCreateOrConnectWithoutUserInput } from "../inputs/ShowLikeCreateOrConnectWithoutUserInput";
import { ShowLikeCreateWithoutUserInput } from "../inputs/ShowLikeCreateWithoutUserInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ShowLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ShowLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: ShowLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ShowLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ShowLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowLikeWhereUniqueInput[] | undefined;
}
