import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutMoviesInput } from "../inputs/PersonCreateOrConnectWithoutMoviesInput";
import { PersonCreateWithoutMoviesInput } from "../inputs/PersonCreateWithoutMoviesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: PersonCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;
}
