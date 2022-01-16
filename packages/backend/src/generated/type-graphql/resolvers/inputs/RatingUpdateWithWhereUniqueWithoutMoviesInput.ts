import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingUpdateWithoutMoviesInput } from "../inputs/RatingUpdateWithoutMoviesInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: RatingUpdateWithoutMoviesInput;
}
