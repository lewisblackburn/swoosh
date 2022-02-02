import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {CreateSongInMovieArgs, DeleteSongInMovieArgs, SongInMovie} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(SongInMovie)
export class SongInMovieResolver {
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createSongInMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongInMovieArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const songInMovie = await ctx.prisma.songInMovie.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(songInMovie);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteSongInMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteSongInMovieArgs
	): Promise<boolean> {
		const songInMovie = await ctx.prisma.songInMovie.delete({
			...args,
		});

		return Boolean(songInMovie);
	}
}
