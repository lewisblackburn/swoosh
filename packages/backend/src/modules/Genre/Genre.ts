import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {Genre, UpdateGenreArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(Genre)
export class GenreResolver {
	@Mutation(() => Genre, {
		nullable: true,
	})
	async updateGenre(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateGenreArgs
	): Promise<Genre | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.genre.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
