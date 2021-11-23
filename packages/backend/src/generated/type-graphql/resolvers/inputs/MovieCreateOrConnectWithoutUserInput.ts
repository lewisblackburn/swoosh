import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutUserInput } from "../inputs/MovieCreateWithoutUserInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieCreateWithoutUserInput;
}
