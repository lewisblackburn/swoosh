import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutBooksInput } from "../inputs/PersonCreateOrConnectWithoutBooksInput";
import { PersonCreateWithoutBooksInput } from "../inputs/PersonCreateWithoutBooksInput";
import { PersonUpdateWithoutBooksInput } from "../inputs/PersonUpdateWithoutBooksInput";
import { PersonUpsertWithoutBooksInput } from "../inputs/PersonUpsertWithoutBooksInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutBooksInput", {
  isAbstract: true
})
export class PersonUpdateOneRequiredWithoutBooksInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutBooksInput, {
    nullable: true
  })
  create?: PersonCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutBooksInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutBooksInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutBooksInput | undefined;
}
