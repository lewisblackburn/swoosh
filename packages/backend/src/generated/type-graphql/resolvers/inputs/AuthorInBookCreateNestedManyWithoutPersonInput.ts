import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateManyPersonInputEnvelope } from "../inputs/AuthorInBookCreateManyPersonInputEnvelope";
import { AuthorInBookCreateOrConnectWithoutPersonInput } from "../inputs/AuthorInBookCreateOrConnectWithoutPersonInput";
import { AuthorInBookCreateWithoutPersonInput } from "../inputs/AuthorInBookCreateWithoutPersonInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookCreateNestedManyWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookCreateNestedManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [AuthorInBookCreateWithoutPersonInput], {
    nullable: true
  })
  create?: AuthorInBookCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: AuthorInBookCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorInBookCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorInBookWhereUniqueInput[] | undefined;
}
