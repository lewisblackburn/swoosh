import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateManyWithoutFavouritesInput } from "../inputs/BookUpdateManyWithoutFavouritesInput";
import { PersonUpdateManyWithoutFavouritesInput } from "../inputs/PersonUpdateManyWithoutFavouritesInput";
import { ShowUpdateManyWithoutFavouriteInput } from "../inputs/ShowUpdateManyWithoutFavouriteInput";
import { SongUpdateManyWithoutFavouritesInput } from "../inputs/SongUpdateManyWithoutFavouritesInput";
import { UserUpdateOneRequiredWithoutFavouritesInput } from "../inputs/UserUpdateOneRequiredWithoutFavouritesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateWithoutMoviesInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFavouritesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateManyWithoutFavouriteInput, {
    nullable: true
  })
  shows?: ShowUpdateManyWithoutFavouriteInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutFavouritesInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateManyWithoutFavouritesInput, {
    nullable: true
  })
  books?: BookUpdateManyWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateManyWithoutFavouritesInput, {
    nullable: true
  })
  people?: PersonUpdateManyWithoutFavouritesInput | undefined;
}