import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {FindManySongReviewArgs, SongReview, UpdateSongReviewArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateSongReviewCustomArgs} from './args/CreateSongReviewCustomArgs';

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
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createSongReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongReviewCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const songReview = await ctx.prisma.songReview.create({
			data: {
				rating: args.data.rating,
				review: args.data.review,
				song: {
					...args.data.song,
				},
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(songReview);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => SongReview, {
		nullable: false,
	})
	async updateSongReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateSongReviewArgs
	): Promise<SongReview> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songReview.update({
			...args,
			data: {
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async deleteSongReview(@Ctx() ctx: Context, @Arg('songId', () => Int) songId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const songReview = await ctx.prisma.songReview.delete({
			where: {
				userId_songId: {
					userId: ctx.req.session.userId,
					songId,
				},
			},
		});

		return Boolean(songReview);
	}
}
