import {ActorInMovie, CreateActorInMovieArgs} from '../../generated/type-graphql';
import {transformFields, transformCountFieldIntoSelectRelationsCount} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';

@Resolver(ActorInMovie)
export class ActorInMovieResolver {
	@Mutation(() => ActorInMovie, {
		nullable: false,
	})
	async createActorInMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateActorInMovieArgs
	): Promise<ActorInMovie> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.actorInMovie.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
