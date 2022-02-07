import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {CreateSongInShowArgs, DeleteSongInShowArgs, SongInShow} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(SongInShow)
export class SongInShowResolver {
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createSongInShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongInShowArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const songInShow = await ctx.prisma.songInShow.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(songInShow);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteSongInShow(@Ctx() ctx: Context, @Args() args: DeleteSongInShowArgs): Promise<boolean> {
		const songInShow = await ctx.prisma.songInShow.delete({
			...args,
		});

		return Boolean(songInShow);
	}
}
