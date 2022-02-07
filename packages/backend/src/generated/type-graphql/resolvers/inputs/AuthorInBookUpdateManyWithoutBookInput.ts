import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateManyBookInputEnvelope } from "../inputs/AuthorInBookCreateManyBookInputEnvelope";
import { AuthorInBookCreateOrConnectWithoutBookInput } from "../inputs/AuthorInBookCreateOrConnectWithoutBookInput";
import { AuthorInBookCreateWithoutBookInput } from "../inputs/AuthorInBookCreateWithoutBookInput";
import { AuthorInBookScalarWhereInput } from "../inputs/AuthorInBookScalarWhereInput";
import { AuthorInBookUpdateManyWithWhereWithoutBookInput } from "../inputs/AuthorInBookUpdateManyWithWhereWithoutBookInput";
import { AuthorInBookUpdateWithWhereUniqueWithoutBookInput } from "../inputs/AuthorInBookUpdateWithWhereUniqueWithoutBookInput";
import { AuthorInBookUpsertWithWhereUniqueWithoutBookInput } from "../inputs/AuthorInBookUpsertWithWhereUniqueWithoutBookInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookUpdateManyWithoutBookInput", {
  isAbstract: true
})
export class AuthorInBookUpdateManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [AuthorInBookCreateWithoutBookInput], {
    nullable: true
  })
  create?: AuthorInBookCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: AuthorInBookCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  upsert?: AuthorInBookUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorInBookCreateManyBookInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AuthorInBookUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  update?: AuthorInBookUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookUpdateManyWithWhereWithoutBookInput], {
    nullable: true
  })
  updateMany?: AuthorInBookUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AuthorInBookScalarWhereInput[] | undefined;
}
