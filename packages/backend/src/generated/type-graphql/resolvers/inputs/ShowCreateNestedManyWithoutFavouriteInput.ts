import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutFavouriteInput } from "../inputs/ShowCreateOrConnectWithoutFavouriteInput";
import { ShowCreateWithoutFavouriteInput } from "../inputs/ShowCreateWithoutFavouriteInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowCreateNestedManyWithoutFavouriteInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutFavouriteInput], {
    nullable: true
  })
  create?: ShowCreateWithoutFavouriteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutFavouriteInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutFavouriteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;
}
