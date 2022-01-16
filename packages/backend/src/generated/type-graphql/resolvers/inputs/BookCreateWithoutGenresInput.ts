import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateNestedManyWithoutBooksInput } from "../inputs/FavouriteCreateNestedManyWithoutBooksInput";
import { PersonCreateNestedManyWithoutBooksInput } from "../inputs/PersonCreateNestedManyWithoutBooksInput";
import { ReviewCreateNestedManyWithoutBookInput } from "../inputs/ReviewCreateNestedManyWithoutBookInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateWithoutGenresInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedManyWithoutBooksInput, {
    nullable: true
  })
  authors?: PersonCreateNestedManyWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteCreateNestedManyWithoutBooksInput, {
    nullable: true
  })
  favourites?: FavouriteCreateNestedManyWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutBookInput, {
    nullable: true
  })
  reviews?: ReviewCreateNestedManyWithoutBookInput | undefined;
}