import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutActorInput } from "../inputs/MovieCreateWithoutActorInput";
import { MovieUpdateWithoutActorInput } from "../inputs/MovieUpdateWithoutActorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithWhereUniqueWithoutActorInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutActorInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutActorInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutActorInput, {
    nullable: false
  })
  create!: MovieCreateWithoutActorInput;
}
