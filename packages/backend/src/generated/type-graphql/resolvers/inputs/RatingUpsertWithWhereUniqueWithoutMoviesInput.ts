import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateWithoutMoviesInput } from "../inputs/RatingCreateWithoutMoviesInput";
import { RatingUpdateWithoutMoviesInput } from "../inputs/RatingUpdateWithoutMoviesInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: RatingUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => RatingCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: RatingCreateWithoutMoviesInput;
}
