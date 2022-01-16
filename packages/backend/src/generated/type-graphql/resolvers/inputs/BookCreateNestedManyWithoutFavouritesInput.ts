import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutFavouritesInput } from "../inputs/BookCreateOrConnectWithoutFavouritesInput";
import { BookCreateWithoutFavouritesInput } from "../inputs/BookCreateWithoutFavouritesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateNestedManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: BookCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}
