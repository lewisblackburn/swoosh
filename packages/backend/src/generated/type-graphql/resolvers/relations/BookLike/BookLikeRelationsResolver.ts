import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookLike } from "../../../models/BookLike";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookLike)
export class BookLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() bookLike: BookLike, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).bookLike.findUnique({
      where: {
        userId_bookId: {
          userId: bookLike.userId,
          bookId: bookLike.bookId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Book, {
    nullable: false
  })
  async book(@TypeGraphQL.Root() bookLike: BookLike, @TypeGraphQL.Ctx() ctx: any): Promise<Book> {
    return getPrismaFromContext(ctx).bookLike.findUnique({
      where: {
        userId_bookId: {
          userId: bookLike.userId,
          bookId: bookLike.bookId,
        },
      },
    }).book({});
  }
}
