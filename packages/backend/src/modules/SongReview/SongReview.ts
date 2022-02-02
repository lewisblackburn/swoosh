import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {CreateSongReviewArgs, FindManySongReviewArgs, SongReview} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(SongReview)
export class SongReviewResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [SongReview], {
		nullable: false,
	})
	async songReviews(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManySongReviewArgs
	): Promise<SongReview[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songReview.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => SongReview, {
		nullable: false,
	})
	async createSongReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongReviewArgs
	): Promise<SongReview> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songReview.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
