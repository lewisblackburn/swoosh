import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutFavouritesInput } from "../inputs/BookCreateOrConnectWithoutFavouritesInput";
import { BookCreateWithoutFavouritesInput } from "../inputs/BookCreateWithoutFavouritesInput";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutFavouritesInput } from "../inputs/BookUpdateManyWithWhereWithoutFavouritesInput";
import { BookUpdateWithWhereUniqueWithoutFavouritesInput } from "../inputs/BookUpdateWithWhereUniqueWithoutFavouritesInput";
import { BookUpsertWithWhereUniqueWithoutFavouritesInput } from "../inputs/BookUpsertWithWhereUniqueWithoutFavouritesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpdateManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: BookCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  set?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  delete?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutFavouritesInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
