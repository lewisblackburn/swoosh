import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateManyShowInputEnvelope } from "../inputs/ShowLikeCreateManyShowInputEnvelope";
import { ShowLikeCreateOrConnectWithoutShowInput } from "../inputs/ShowLikeCreateOrConnectWithoutShowInput";
import { ShowLikeCreateWithoutShowInput } from "../inputs/ShowLikeCreateWithoutShowInput";
import { ShowLikeScalarWhereInput } from "../inputs/ShowLikeScalarWhereInput";
import { ShowLikeUpdateManyWithWhereWithoutShowInput } from "../inputs/ShowLikeUpdateManyWithWhereWithoutShowInput";
import { ShowLikeUpdateWithWhereUniqueWithoutShowInput } from "../inputs/ShowLikeUpdateWithWhereUniqueWithoutShowInput";
import { ShowLikeUpsertWithWhereUniqueWithoutShowInput } from "../inputs/ShowLikeUpsertWithWhereUniqueWithoutShowInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeUpdateManyWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeUpdateManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ShowLikeCreateWithoutShowInput], {
    nullable: true
  })
  create?: ShowLikeCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ShowLikeCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeUpsertWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  upsert?: ShowLikeUpsertWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowLikeCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ShowLikeCreateManyShowInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ShowLikeUpdateWithWhereUniqueWithoutShowInput], {
    nullable: true
  })
  update?: ShowLikeUpdateWithWhereUniqueWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeUpdateManyWithWhereWithoutShowInput], {
    nullable: true
  })
  updateMany?: ShowLikeUpdateManyWithWhereWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowLikeScalarWhereInput[] | undefined;
}
