import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateNestedManyWithoutBookInput } from "../inputs/AuthorInBookCreateNestedManyWithoutBookInput";
import { BookLikeCreateNestedManyWithoutBookInput } from "../inputs/BookLikeCreateNestedManyWithoutBookInput";
import { GenreCreateNestedManyWithoutBooksInput } from "../inputs/GenreCreateNestedManyWithoutBooksInput";

@TypeGraphQL.InputType("BookCreateWithoutReviewsInput", {
  isAbstract: true
})
export class BookCreateWithoutReviewsInput {
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
  poster?: string | undefined;

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

  @TypeGraphQL.Field(_type => AuthorInBookCreateNestedManyWithoutBookInput, {
    nullable: true
  })
  authors?: AuthorInBookCreateNestedManyWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutBooksInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeCreateNestedManyWithoutBookInput, {
    nullable: true
  })
  likes?: BookLikeCreateNestedManyWithoutBookInput | undefined;
}
