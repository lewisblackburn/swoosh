import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutShowsInput } from "../inputs/FavouriteCreateOrConnectWithoutShowsInput";
import { FavouriteCreateWithoutShowsInput } from "../inputs/FavouriteCreateWithoutShowsInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteCreateNestedManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutShowsInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput[] | undefined;
}
