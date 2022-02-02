import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {CreateSongArgs, DeleteSongArgs, FindManySongArgs, FindUniqueSongArgs, Song} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Song)
export class SongResolver {
	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Song, {
		nullable: false,
	})
	async createSong(@Ctx() ctx: Context, @Args() args: CreateSongArgs): Promise<Song> {
		return ctx.prisma.song.create({
			data: {
				title: args.data.title,
				description: args.data.description,
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
		@Args() args: FindUniqueSongArgs
	): Promise<Song | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.song.findUnique({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Song], {nullable: true})
	async songs(@Ctx() ctx: Context, @Args() args: FindManySongArgs): Promise<Song[] | null> {
		return ctx.prisma.song.findMany({...args});
	}
}
