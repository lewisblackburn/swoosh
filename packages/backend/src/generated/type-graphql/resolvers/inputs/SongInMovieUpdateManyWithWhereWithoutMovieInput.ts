import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieScalarWhereInput } from "../inputs/SongInMovieScalarWhereInput";
import { SongInMovieUpdateManyMutationInput } from "../inputs/SongInMovieUpdateManyMutationInput";

@TypeGraphQL.InputType("SongInMovieUpdateManyWithWhereWithoutMovieInput", {
  isAbstract: true
})
export class SongInMovieUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => SongInMovieScalarWhereInput, {
    nullable: false
  })
  where!: SongInMovieScalarWhereInput;

  @TypeGraphQL.Field(_type => SongInMovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongInMovieUpdateManyMutationInput;
}
