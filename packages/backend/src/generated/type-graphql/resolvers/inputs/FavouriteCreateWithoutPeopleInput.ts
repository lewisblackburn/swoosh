import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutFavouritesInput } from "../inputs/BookCreateNestedManyWithoutFavouritesInput";
import { MovieCreateNestedManyWithoutFavouritesInput } from "../inputs/MovieCreateNestedManyWithoutFavouritesInput";
import { ShowCreateNestedManyWithoutFavouriteInput } from "../inputs/ShowCreateNestedManyWithoutFavouriteInput";
import { SongCreateNestedManyWithoutFavouritesInput } from "../inputs/SongCreateNestedManyWithoutFavouritesInput";
import { UserCreateNestedOneWithoutFavouritesInput } from "../inputs/UserCreateNestedOneWithoutFavouritesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteCreateWithoutPeopleInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFavouritesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutFavouritesInput;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutFavouritesInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedManyWithoutFavouriteInput, {
    nullable: true
  })
  shows?: ShowCreateNestedManyWithoutFavouriteInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutFavouritesInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutFavouritesInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutFavouritesInput | undefined;
}