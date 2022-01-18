import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutMoviesInput } from "../inputs/PersonCreateOrConnectWithoutMoviesInput";
import { PersonCreateWithoutMoviesInput } from "../inputs/PersonCreateWithoutMoviesInput";
import { PersonUpdateWithoutMoviesInput } from "../inputs/PersonUpdateWithoutMoviesInput";
import { PersonUpsertWithoutMoviesInput } from "../inputs/PersonUpsertWithoutMoviesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutMoviesInput", {
  isAbstract: true
})
export class PersonUpdateOneRequiredWithoutMoviesInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: PersonCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutMoviesInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutMoviesInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutMoviesInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutMoviesInput | undefined;
}
