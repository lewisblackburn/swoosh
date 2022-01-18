import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutBooksInput } from "../inputs/PersonCreateOrConnectWithoutBooksInput";
import { PersonCreateWithoutBooksInput } from "../inputs/PersonCreateWithoutBooksInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonCreateNestedManyWithoutBooksInput", {
  isAbstract: true
})
export class PersonCreateNestedManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutBooksInput], {
    nullable: true
  })
  create?: PersonCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;
}
