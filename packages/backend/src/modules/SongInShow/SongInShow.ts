import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {CreateSongInShowArgs, DeleteSongInShowArgs, SongInShow} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(SongInShow)
export class SongInShowResolver {
	@Mutation(() => SongInShow, {
		nullable: false,
	})
	async addSongToShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateSongInShowArgs
	): Promise<SongInShow> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songInShow.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Mutation(() => SongInShow, {
		nullable: true,
	})
	async deleteSongFromShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteSongInShowArgs
	): Promise<SongInShow | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.songInShow.delete({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
