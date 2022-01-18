import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutShowsInput } from "../inputs/PersonCreateOrConnectWithoutShowsInput";
import { PersonCreateWithoutShowsInput } from "../inputs/PersonCreateWithoutShowsInput";
import { PersonUpdateWithoutShowsInput } from "../inputs/PersonUpdateWithoutShowsInput";
import { PersonUpsertWithoutShowsInput } from "../inputs/PersonUpsertWithoutShowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutShowsInput", {
  isAbstract: true
})
export class PersonUpdateOneRequiredWithoutShowsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutShowsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutShowsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutShowsInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutShowsInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutShowsInput | undefined;
}
