import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateWithoutShowsInput } from "../inputs/RatingCreateWithoutShowsInput";
import { RatingUpdateWithoutShowsInput } from "../inputs/RatingUpdateWithoutShowsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpsertWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingUpdateWithoutShowsInput, {
    nullable: false
  })
  update!: RatingUpdateWithoutShowsInput;

  @TypeGraphQL.Field(_type => RatingCreateWithoutShowsInput, {
    nullable: false
  })
  create!: RatingCreateWithoutShowsInput;
}
