import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutBooksInput } from "../inputs/FavouriteCreateOrConnectWithoutBooksInput";
import { FavouriteCreateWithoutBooksInput } from "../inputs/FavouriteCreateWithoutBooksInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteCreateNestedManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutBooksInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput[] | undefined;
}
