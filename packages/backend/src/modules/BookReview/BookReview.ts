import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {FindManyBookReviewArgs, BookReview, UpdateBookReviewArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateBookReviewCustomArgs} from './args/CreateBookReviewCustomArgs';

@Resolver(BookReview)
export class BookReviewResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [BookReview], {
		nullable: false,
	})
	async bookReviews(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyBookReviewArgs
	): Promise<BookReview[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.bookReview.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createBookReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateBookReviewCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const bookReview = await ctx.prisma.bookReview.create({
			data: {
				rating: args.data.rating,
				review: args.data.review,
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

		return Boolean(bookReview);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => BookReview, {
		nullable: false,
	})
	async updateBookReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateBookReviewArgs
	): Promise<BookReview> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.bookReview.update({
			...args,
			data: {
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async deleteBookReview(@Ctx() ctx: Context, @Arg('bookId', () => Int) bookId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const bookReview = await ctx.prisma.bookReview.delete({
			where: {
				userId_bookId: {
					userId: ctx.req.session.userId,
					bookId,
				},
			},
		});

		return Boolean(bookReview);
	}
}
