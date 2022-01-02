import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutShowsInput } from "../inputs/PersonCreateOrConnectWithoutShowsInput";
import { PersonCreateWithoutShowsInput } from "../inputs/PersonCreateWithoutShowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedOneWithoutShowsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutShowsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutShowsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;
}
