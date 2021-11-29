import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Person } from "../../../models/Person";
import { BookAuthorsArgs } from "./args/BookAuthorsArgs";
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
}
