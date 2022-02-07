import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {
	Arg,
	Args,
	Authorized,
	Ctx,
	FieldResolver,
	Info,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import {
	AggregateSongReview,
	AggregateSongReviewArgs,
	CreateSongArgs,
	DeleteSongArgs,
	FindManySongArgs,
	Song,
	UpdateSongArgs,
} from '../../generated/type-graphql';
import {
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
	transformFields,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Song)
export class SongResolver {
	@FieldResolver(() => Boolean, {
		nullable: false,
	})
	async isLiked(@Root() root: Song, @Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<boolean> {
		if (!ctx.req.session.userId) {
			throw new Error('No User');
		}

		const songLike = await ctx.prisma.songLike.findUnique({
			where: {
				userId_songId: {
					songId: root.id,
					userId: ctx.req.session.userId,
				},
			},
			...transformFields(graphqlFields(info as any)),
		});

		return Boolean(songLike);
	}

	@FieldResolver(() => AggregateSongReview, {
		nullable: false,
	})
	async aggregateSongReview(
		@Root() root: Song,
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: AggregateSongReviewArgs
	): Promise<AggregateSongReview> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return getPrismaFromContext(ctx).songReview.aggregate({
			...args,
			where: {
				songId: root.id,
			},
			...transformFields(graphqlFields(info as any)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, {
		nullable: false,
	})
	async createSong(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongArgs
	): Promise<Song> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.song.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, {
		nullable: true,
	})
	async editSong(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateSongArgs
	): Promise<Song | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.song.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, {nullable: true})
	async lockSong(
		@Ctx() ctx: Context,
		@Arg('songId', () => Int) songId: number,
		@Arg('lock') lock: boolean
	): Promise<Song | null> {
		return ctx.prisma.song.update({
			where: {
				id: songId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, {nullable: true})
	async deleteSong(@Ctx() ctx: Context, @Args() args: DeleteSongArgs): Promise<Song | null> {
		return ctx.prisma.song.delete({
			...args,
		});
	}

	@Query(() => Song, {
		nullable: true,
	})
	async song(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('songId', () => Int) songId: number
	): Promise<Song | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.song.findUnique({
			where: {
				id: songId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Song], {nullable: true})
	async songs(@Args() args: FindManySongArgs, @Ctx() ctx: Context): Promise<Song[] | null> {
		return ctx.prisma.song.findMany({
			...args,
		});
	}
}
