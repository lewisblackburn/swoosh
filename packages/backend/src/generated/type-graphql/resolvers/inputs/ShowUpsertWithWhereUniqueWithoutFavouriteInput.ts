import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutFavouriteInput } from "../inputs/ShowCreateWithoutFavouriteInput";
import { ShowUpdateWithoutFavouriteInput } from "../inputs/ShowUpdateWithoutFavouriteInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpsertWithWhereUniqueWithoutFavouriteInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutFavouriteInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutFavouriteInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutFavouriteInput, {
    nullable: false
  })
  create!: ShowCreateWithoutFavouriteInput;
}
