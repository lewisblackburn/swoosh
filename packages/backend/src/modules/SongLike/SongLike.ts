import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {FindManySongLikeArgs, SongLike} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateSongLikeCustomArgs} from './args/CreateSongLikeCustomArgs';

@Resolver(SongLike)
export class SongLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [SongLike], {
		nullable: false,
	})
	async likedSongs(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManySongLikeArgs
	): Promise<SongLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async likeSong(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongLikeCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const songLike = await ctx.prisma.songLike.create({
			data: {
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

		return Boolean(songLike);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async unlikeSong(@Ctx() ctx: Context, @Arg('songId', () => Int) songId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const songLike = await ctx.prisma.songLike.delete({
			where: {
				userId_songId: {
					userId: ctx.req.session.userId,
					songId,
				},
			},
		});

		return Boolean(songLike);
	}
}
