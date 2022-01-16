import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutSongsInput } from "../inputs/FavouriteCreateOrConnectWithoutSongsInput";
import { FavouriteCreateWithoutSongsInput } from "../inputs/FavouriteCreateWithoutSongsInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteCreateNestedManyWithoutSongsInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutSongsInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput[] | undefined;
}
