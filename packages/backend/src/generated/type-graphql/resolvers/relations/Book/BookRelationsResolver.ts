import * as TypeGraphQL from "type-graphql";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { Book } from "../../../models/Book";
import { BookLike } from "../../../models/BookLike";
import { BookReview } from "../../../models/BookReview";
import { Genre } from "../../../models/Genre";
import { BookAuthorsArgs } from "./args/BookAuthorsArgs";
import { BookGenresArgs } from "./args/BookGenresArgs";
import { BookLikesArgs } from "./args/BookLikesArgs";
import { BookReviewsArgs } from "./args/BookReviewsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [AuthorInBook], {
    nullable: false
  })
  async authors(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookAuthorsArgs): Promise<AuthorInBook[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).authors(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Genre], {
    nullable: false
  })
  async genres(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookGenresArgs): Promise<Genre[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).genres(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookReview], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookReviewsArgs): Promise<BookReview[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).reviews(args);
  }

  @TypeGraphQL.FieldResolver(_type => [BookLike], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookLikesArgs): Promise<BookLike[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).likes(args);
  }
}
