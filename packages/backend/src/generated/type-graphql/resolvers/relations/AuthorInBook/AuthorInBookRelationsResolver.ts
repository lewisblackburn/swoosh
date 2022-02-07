import * as TypeGraphQL from "type-graphql";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { Book } from "../../../models/Book";
import { Person } from "../../../models/Person";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class AuthorInBookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Book, {
    nullable: false
  })
  async book(@TypeGraphQL.Root() authorInBook: AuthorInBook, @TypeGraphQL.Ctx() ctx: any): Promise<Book> {
    return getPrismaFromContext(ctx).authorInBook.findUnique({
      where: {
        personId_bookId: {
          personId: authorInBook.personId,
          bookId: authorInBook.bookId,
        },
      },
    }).book({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() authorInBook: AuthorInBook, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).authorInBook.findUnique({
      where: {
        personId_bookId: {
          personId: authorInBook.personId,
          bookId: authorInBook.bookId,
        },
      },
    }).person({});
  }
}
