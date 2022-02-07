import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateManyUserInputEnvelope } from "../inputs/ShowLikeCreateManyUserInputEnvelope";
import { ShowLikeCreateOrConnectWithoutUserInput } from "../inputs/ShowLikeCreateOrConnectWithoutUserInput";
import { ShowLikeCreateWithoutUserInput } from "../inputs/ShowLikeCreateWithoutUserInput";
import { ShowLikeScalarWhereInput } from "../inputs/ShowLikeScalarWhereInput";
import { ShowLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/ShowLikeUpdateManyWithWhereWithoutUserInput";
import { ShowLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ShowLikeUpdateWithWhereUniqueWithoutUserInput";
import { ShowLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ShowLikeUpsertWithWhereUniqueWithoutUserInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ShowLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ShowLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: ShowLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ShowLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ShowLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ShowLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereUniqueInput], {
    nullable: true
  })
  set?: ShowLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShowLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: ShowLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ShowLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ShowLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowLikeScalarWhereInput[] | undefined;
}
