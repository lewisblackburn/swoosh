import * as TypeGraphQL from "type-graphql";
import { ActorInShow } from "../../../models/ActorInShow";
import { Person } from "../../../models/Person";
import { Show } from "../../../models/Show";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInShow)
export class ActorInShowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Show, {
    nullable: false
  })
  async show(@TypeGraphQL.Root() actorInShow: ActorInShow, @TypeGraphQL.Ctx() ctx: any): Promise<Show> {
    return getPrismaFromContext(ctx).actorInShow.findUnique({
      where: {
        personId_showId: {
          personId: actorInShow.personId,
          showId: actorInShow.showId,
        },
      },
    }).show({});
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() actorInShow: ActorInShow, @TypeGraphQL.Ctx() ctx: any): Promise<Person> {
    return getPrismaFromContext(ctx).actorInShow.findUnique({
      where: {
        personId_showId: {
          personId: actorInShow.personId,
          showId: actorInShow.showId,
        },
      },
    }).person({});
  }
}
