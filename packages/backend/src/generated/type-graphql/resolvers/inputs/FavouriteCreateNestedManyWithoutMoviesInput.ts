import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutMoviesInput } from "../inputs/FavouriteCreateOrConnectWithoutMoviesInput";
import { FavouriteCreateWithoutMoviesInput } from "../inputs/FavouriteCreateWithoutMoviesInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput[] | undefined;
}
