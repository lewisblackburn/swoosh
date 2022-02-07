import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateManyBookInputEnvelope } from "../inputs/AuthorInBookCreateManyBookInputEnvelope";
import { AuthorInBookCreateOrConnectWithoutBookInput } from "../inputs/AuthorInBookCreateOrConnectWithoutBookInput";
import { AuthorInBookCreateWithoutBookInput } from "../inputs/AuthorInBookCreateWithoutBookInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookCreateNestedManyWithoutBookInput", {
  isAbstract: true
})
export class AuthorInBookCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [AuthorInBookCreateWithoutBookInput], {
    nullable: true
  })
  create?: AuthorInBookCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: AuthorInBookCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorInBookCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorInBookWhereUniqueInput[] | undefined;
}
