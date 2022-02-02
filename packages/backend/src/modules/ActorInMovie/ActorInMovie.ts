import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {ActorInMovie, CreateActorInMovieArgs, DeleteActorInMovieArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(ActorInMovie)
export class ActorInMovieResolver {
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createActorInMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateActorInMovieArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const actorInMovie = await ctx.prisma.actorInMovie.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(actorInMovie);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteActorInMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteActorInMovieArgs
	): Promise<boolean> {
		const actorInMovie = await ctx.prisma.actorInMovie.delete({
			...args,
		});

		return Boolean(actorInMovie);
	}
}
