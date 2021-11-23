import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyUserInput } from "../inputs/MovieCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieCreateManyUserInput], {
    nullable: false
  })
  data!: MovieCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
