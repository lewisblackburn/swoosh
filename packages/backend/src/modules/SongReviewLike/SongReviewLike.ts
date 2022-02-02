import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreateSongReviewLikeArgs,
	DeleteSongReviewLikeArgs,
	FindManySongReviewLikeArgs,
	SongReviewLike,
} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(SongReviewLike)
export class SongReviewLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [SongReviewLike], {
		nullable: false,
	})
	async songReviewLikes(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManySongReviewLikeArgs
	): Promise<SongReviewLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songReviewLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => SongReviewLike, {
		nullable: false,
	})
	async createSongReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongReviewLikeArgs
	): Promise<SongReviewLike> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songReviewLike.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Mutation(() => SongReviewLike, {
		nullable: true,
	})
	async deleteSongReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteSongReviewLikeArgs
	): Promise<SongReviewLike | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songReviewLike.delete({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
