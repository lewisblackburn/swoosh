import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutFavouritesInput } from "../inputs/MovieCreateOrConnectWithoutFavouritesInput";
import { MovieCreateWithoutFavouritesInput } from "../inputs/MovieCreateWithoutFavouritesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateNestedManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: MovieCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
