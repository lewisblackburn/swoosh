import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieScalarWhereInput } from "../inputs/PlatformOnMovieScalarWhereInput";
import { PlatformOnMovieUpdateManyMutationInput } from "../inputs/PlatformOnMovieUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => PlatformOnMovieScalarWhereInput, {
    nullable: false
  })
  where!: PlatformOnMovieScalarWhereInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlatformOnMovieUpdateManyMutationInput;
}
