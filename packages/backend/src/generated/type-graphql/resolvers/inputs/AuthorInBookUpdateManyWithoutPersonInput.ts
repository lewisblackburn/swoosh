import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateManyPersonInputEnvelope } from "../inputs/AuthorInBookCreateManyPersonInputEnvelope";
import { AuthorInBookCreateOrConnectWithoutPersonInput } from "../inputs/AuthorInBookCreateOrConnectWithoutPersonInput";
import { AuthorInBookCreateWithoutPersonInput } from "../inputs/AuthorInBookCreateWithoutPersonInput";
import { AuthorInBookScalarWhereInput } from "../inputs/AuthorInBookScalarWhereInput";
import { AuthorInBookUpdateManyWithWhereWithoutPersonInput } from "../inputs/AuthorInBookUpdateManyWithWhereWithoutPersonInput";
import { AuthorInBookUpdateWithWhereUniqueWithoutPersonInput } from "../inputs/AuthorInBookUpdateWithWhereUniqueWithoutPersonInput";
import { AuthorInBookUpsertWithWhereUniqueWithoutPersonInput } from "../inputs/AuthorInBookUpsertWithWhereUniqueWithoutPersonInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookUpdateManyWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookUpdateManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [AuthorInBookCreateWithoutPersonInput], {
    nullable: true
  })
  create?: AuthorInBookCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: AuthorInBookCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookUpsertWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  upsert?: AuthorInBookUpsertWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorInBookCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereUniqueInput], {
    nullable: true
  })
  set?: AuthorInBookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AuthorInBookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereUniqueInput], {
    nullable: true
  })
  delete?: AuthorInBookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorInBookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookUpdateWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  update?: AuthorInBookUpdateWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookUpdateManyWithWhereWithoutPersonInput], {
    nullable: true
  })
  updateMany?: AuthorInBookUpdateManyWithWhereWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AuthorInBookScalarWhereInput[] | undefined;
}
