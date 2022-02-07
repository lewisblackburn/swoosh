import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {AuthorInBook, CreateAuthorInBookArgs, DeleteAuthorInBookArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(AuthorInBook)
export class AuthorInBookResolver {
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createAuthorInBook(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateAuthorInBookArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const authorInBook = await ctx.prisma.authorInBook.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(authorInBook);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteAuthorInBook(@Ctx() ctx: Context, @Args() args: DeleteAuthorInBookArgs): Promise<boolean> {
		const authorInBook = await ctx.prisma.authorInBook.delete({
			...args,
		});

		return Boolean(authorInBook);
	}
}
