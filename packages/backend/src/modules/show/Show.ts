import { GraphQLResolveInfo } from 'graphql';
import { Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import {
	CreateShowArgs,
	DeletePlatformOnShowArgs,
	DeleteShowArgs,
	DeleteSongInShowArgs,
	FindManyShowArgs,
	Show,
	UpdateShowArgs,
} from '../../generated/type-graphql';
import { Context } from '../../interfaces/context';
import { ErrorInterceptor } from '../middleware/ErrorInterceptor';

@Resolver(Show)
export class ShowResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, { nullable: true })
	async createShow(@Ctx() ctx: Context, @Args() args: CreateShowArgs): Promise<Show | null> {
		return ctx.prisma.show.create({
			data: {
				title: args.data.title,
				description: args.data.description,
			},
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, { nullable: true })
	async editShow(@Ctx() ctx: Context, @Args() args: UpdateShowArgs): Promise<Show | null> {
		return ctx.prisma.show.update({
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
	@Mutation(() => Show, { nullable: true })
	async lockShow(
		@Ctx() ctx: Context,
		@Arg('showId', () => Int) movieId: number,
		@Arg('lock') lock: boolean
	): Promise<Show | null> {
		return ctx.prisma.show.update({
			where: {
				id: movieId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, { nullable: true })
	async deleteShow(@Ctx() ctx: Context, @Args() args: DeleteShowArgs): Promise<Show | null> {
		return ctx.prisma.movie.delete({
			...args,
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, { nullable: true })
	async addActorToShow(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('showId', () => Int) showId: number,
		@Arg('role') role: string
	): Promise<boolean> {
		const actor = await ctx.prisma.actorInShow.create({
			data: {
				showId,
				personId,
				role,
			},
		});

		return Boolean(actor);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, { nullable: true })
	async removeActorFromShow(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('showId', () => Int) showId: number
	): Promise<boolean> {
		const actor = await ctx.prisma.actorInShow.delete({
			where: {
				personId_showId: {
					showId,
					personId,
				},
			},
		});

		return Boolean(actor);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async addSongToShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('showId', () => Int) showId: number,
		@Arg('songId', () => Int) songId: number,
		@Arg('timestamp') timestamp: string,
		@Arg('description') description: string
	): Promise<boolean> {
		const song = ctx.prisma.songInShow.create({
			data: {
				showId,
				songId,
				timestamp,
				description,
			},
		});

		return Boolean(song);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async removeSongFromShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteSongInShowArgs
	): Promise<boolean> {
		const song = ctx.prisma.songInShow.delete({
			...args,
		});

		return Boolean(song);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async addPlatformToShow(
		@Ctx() ctx: Context,
		@Arg('showId', () => Int) showId: number,
		@Arg('platformId', () => Int) platformId: number,
		@Arg('price') price: string
	): Promise<boolean> {
		const platform = ctx.prisma.platformOnShow.create({
			data: {
				showId,
				platformId,
				price,
			},
		});

		return Boolean(platform);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async removePlatformFromShow(@Ctx() ctx: Context, @Args() args: DeletePlatformOnShowArgs): Promise<boolean> {
		const platform = ctx.prisma.platformOnShow.delete({
			...args,
		});

		return Boolean(platform);
	}

	@Query(() => Show, { nullable: true })
	async show(@Arg('showId', () => Int) showId: number, @Ctx() ctx: Context): Promise<Show | null> {
		return ctx.prisma.show.findUnique({
			where: {
				id: showId,
			},
		});
	}

	@Query(() => [Show], { nullable: true })
	async shows(@Args() args: FindManyShowArgs, @Ctx() ctx: Context): Promise<Show[] | null> {
		return ctx.prisma.show.findMany({
			...args,
		});
	}
}
