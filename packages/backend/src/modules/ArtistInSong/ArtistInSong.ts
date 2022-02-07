import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {ArtistInSong, CreateArtistInSongArgs, DeleteArtistInSongArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(ArtistInSong)
export class ArtistInSongResolver {
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createArtistInSong(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateArtistInSongArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const artistInSong = await ctx.prisma.artistInSong.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(artistInSong);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteArtistInSong(@Ctx() ctx: Context, @Args() args: DeleteArtistInSongArgs): Promise<boolean> {
		const artistInSong = await ctx.prisma.artistInSong.delete({
			...args,
		});

		return Boolean(artistInSong);
	}
}
