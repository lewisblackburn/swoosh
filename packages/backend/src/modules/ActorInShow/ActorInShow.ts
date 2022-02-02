import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {ActorInShow, CreateActorInShowArgs, DeleteActorInShowArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(ActorInShow)
export class ActorInShowResolver {
	@Mutation(() => ActorInShow, {
		nullable: false,
	})
	async addActorToShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateActorInShowArgs
	): Promise<ActorInShow> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.actorInShow.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Mutation(() => ActorInShow, {
		nullable: true,
	})
	async deleteActorInShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteActorInShowArgs
	): Promise<ActorInShow | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.actorInShow.delete({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
