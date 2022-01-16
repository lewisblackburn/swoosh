import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingUpdateWithoutShowsInput } from "../inputs/RatingUpdateWithoutShowsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpdateWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingUpdateWithoutShowsInput, {
    nullable: false
  })
  data!: RatingUpdateWithoutShowsInput;
}
