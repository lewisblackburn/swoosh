import * as TypeGraphQL from "type-graphql";
import { Person } from "../../../models/Person";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async artist(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).artist({});
  }
}
