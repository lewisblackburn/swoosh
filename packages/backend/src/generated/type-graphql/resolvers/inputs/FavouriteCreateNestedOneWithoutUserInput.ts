import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutUserInput } from "../inputs/FavouriteCreateOrConnectWithoutUserInput";
import { FavouriteCreateWithoutUserInput } from "../inputs/FavouriteCreateWithoutUserInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => FavouriteCreateWithoutUserInput, {
    nullable: true
  })
  create?: FavouriteCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput | undefined;
}
