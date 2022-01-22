import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookReview } from "../../../models/BookReview";
import { BookReviewLike } from "../../../models/BookReviewLike";
import { BookReviewLikesArgs } from "./args/BookReviewLikesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookReview)
export class BookReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [BookReviewLike], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() bookReview: BookReview, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookReviewLikesArgs): Promise<BookReviewLike[]> {
    return getPrismaFromContext(ctx).bookReview.findUnique({
      where: {
        userId_bookId: {
          userId: bookReview.userId,
          bookId: bookReview.bookId,
        },
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => Book, {
    nullable: false
  })
  async book(@TypeGraphQL.Root() bookReview: BookReview, @TypeGraphQL.Ctx() ctx: any): Promise<Book> {
    return getPrismaFromContext(ctx).bookReview.findUnique({
      where: {
        userId_bookId: {
          userId: bookReview.userId,
          bookId: bookReview.bookId,
        },
      },
    }).book({});
  }
}
