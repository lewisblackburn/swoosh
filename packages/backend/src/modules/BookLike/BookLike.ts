import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {BookLike, FindManyBookLikeArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateBookLikeCustomArgs} from './args/CreateBookLikeCustomArgs';

@Resolver(BookLike)
export class BookLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [BookLike], {
		nullable: false,
	})
	async likedBooks(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyBookLikeArgs
	): Promise<BookLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.bookLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async likeBook(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateBookLikeCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const bookLike = await ctx.prisma.bookLike.create({
			data: {
				book: {
					...args.data.book,
				},
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(bookLike);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async unlikeBook(@Ctx() ctx: Context, @Arg('bookId', () => Int) bookId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const bookLike = await ctx.prisma.bookLike.delete({
			where: {
				userId_bookId: {
					userId: ctx.req.session.userId,
					bookId,
				},
			},
		});

		return Boolean(bookLike);
	}
}
