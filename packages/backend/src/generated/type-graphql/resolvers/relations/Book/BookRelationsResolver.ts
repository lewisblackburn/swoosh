import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookReview } from "../../../models/BookReview";
import { Genre } from "../../../models/Genre";
import { Person } from "../../../models/Person";
import { BookAuthorsArgs } from "./args/BookAuthorsArgs";
import { BookGenresArgs } from "./args/BookGenresArgs";
import { BookReviewsArgs } from "./args/BookReviewsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Person], {
    nullable: false
  })
  async authors(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookAuthorsArgs): Promise<Person[]> {
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
}
