import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutRatingInput } from "../inputs/ShowCreateWithoutRatingInput";
import { ShowUpdateWithoutRatingInput } from "../inputs/ShowUpdateWithoutRatingInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpsertWithWhereUniqueWithoutRatingInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutRatingInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutRatingInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutRatingInput, {
    nullable: false
  })
  create!: ShowCreateWithoutRatingInput;
}
