import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Person } from "../../../models/Person";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).author({});
  }
}
