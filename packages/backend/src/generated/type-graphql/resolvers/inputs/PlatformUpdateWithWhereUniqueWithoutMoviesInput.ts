import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformUpdateWithoutMoviesInput } from "../inputs/PlatformUpdateWithoutMoviesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: PlatformUpdateWithoutMoviesInput;
}
