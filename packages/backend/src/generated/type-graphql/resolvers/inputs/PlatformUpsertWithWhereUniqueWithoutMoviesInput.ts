import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateWithoutMoviesInput } from "../inputs/PlatformCreateWithoutMoviesInput";
import { PlatformUpdateWithoutMoviesInput } from "../inputs/PlatformUpdateWithoutMoviesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformUpsertWithWhereUniqueWithoutMoviesInput", {
  isAbstract: true
})
export class PlatformUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: PlatformUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => PlatformCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: PlatformCreateWithoutMoviesInput;
}
