import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Query, Resolver} from 'type-graphql';
import {Watchlist} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {UpdateWatchlistCustomArgs} from './args/UpdateWatchlistCustomArgs';

@Resolver(Watchlist)
export class WatchlistResolver {
	@Query(() => Watchlist, {
		nullable: true,
	})
	async watchlist(@Ctx() ctx: Context): Promise<Watchlist | null> {
		return ctx.prisma.user
			.findUnique({
				where: {
					id: ctx.req.session.userId,
				},
			})
			.watchlist({});
	}

	@Mutation(() => Watchlist, {
		nullable: true,
	})
	async updateWatchlist(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateWatchlistCustomArgs
	): Promise<Watchlist | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.watchlist.update({
			...args,
			where: {
				userId: ctx.req.session.userId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
