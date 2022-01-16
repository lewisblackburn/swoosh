import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowUpdateWithoutFavouriteInput } from "../inputs/ShowUpdateWithoutFavouriteInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateWithWhereUniqueWithoutFavouriteInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutFavouriteInput, {
    nullable: false
  })
  data!: ShowUpdateWithoutFavouriteInput;
}
