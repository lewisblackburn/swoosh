import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieScalarWhereInput } from "../inputs/ActorInMovieScalarWhereInput";
import { ActorInMovieUpdateManyMutationInput } from "../inputs/ActorInMovieUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => ActorInMovieScalarWhereInput, {
    nullable: false
  })
  where!: ActorInMovieScalarWhereInput;

  @TypeGraphQL.Field(_type => ActorInMovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActorInMovieUpdateManyMutationInput;
}
