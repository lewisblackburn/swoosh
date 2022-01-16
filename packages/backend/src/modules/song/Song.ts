import { CreateSongArgs, DeleteSongArgs, Song, UpdateSongArgs } from '../../generated/type-graphql';
import { Context } from '../../interfaces/context';
import { Arg, Args, Authorized, Ctx, Int, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { ErrorInterceptor } from '../middleware/ErrorInterceptor';

@Resolver(Song)
export class SongResolver {
	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, { nullable: true })
	async createSong(@Ctx() ctx: Context, @Args() args: CreateSongArgs): Promise<Song | null> {
		return ctx.prisma.song.create({
			data: {
				title: args.data.title,
				description: args.data.description,
			},
		});
	}

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, { nullable: true })
	async editSong(@Ctx() ctx: Context, @Args() args: UpdateSongArgs): Promise<Song | null> {
		return ctx.prisma.song.update({
			data: {
				title: args.data.title,
				description: args.data.description,
			},
			where: {
				id: args.where.id,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, { nullable: true })
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
	@Mutation(() => Song, { nullable: true })
	async deleteSong(@Ctx() ctx: Context, @Args() args: DeleteSongArgs): Promise<Song | null> {
		return ctx.prisma.song.delete({
			...args,
		});
	}

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, { nullable: true })
	async addArtist(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('songId', () => Int) songId: number
	): Promise<Song | null> {
		return ctx.prisma.song.update({
			where: {
				id: songId,
			},
			data: {
				artists: {
					connect: {
						id: personId,
					},
				},
			},
		});
	}

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, { nullable: true })
	async removeArtist(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('songId', () => Int) songId: number
	): Promise<Song | null> {
		return ctx.prisma.song.update({
			where: {
				id: songId,
			},
			data: {
				artists: {
					disconnect: {
						id: personId,
					},
				},
			},
		});
	}

	@Query(() => Song, { nullable: true })
	async song(@Arg('songId', () => Int) songId: number, @Ctx() ctx: Context): Promise<Song | null> {
		return ctx.prisma.song.findUnique({
			where: {
				id: songId,
			},
		});
	}

	@Query(() => [Song], { nullable: true })
	async songs(@Arg('title', () => String) title: string, @Ctx() ctx: Context): Promise<Song[] | null> {
		return ctx.prisma.song.findMany({
			where: {
				title: {
					contains: title,
				},
			},
		});
	}
}
