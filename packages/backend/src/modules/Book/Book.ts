import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {
	Arg,
	Args,
	Authorized,
	Ctx,
	FieldResolver,
	Info,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import {
	AggregateBookReview,
	AggregateBookReviewArgs,
	Book,
	CreateBookArgs,
	DeleteBookArgs,
	FindManyBookArgs,
	UpdateBookArgs,
} from '../../generated/type-graphql';
import {
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
	transformFields,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Book)
export class BookResolver {
	@FieldResolver(() => Boolean, {
		nullable: false,
	})
	async isLiked(@Root() root: Book, @Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<boolean> {
		if (!ctx.req.session.userId) {
			throw new Error('No User');
		}

		const bookLike = await ctx.prisma.bookLike.findUnique({
			where: {
				userId_bookId: {
					bookId: root.id,
					userId: ctx.req.session.userId,
				},
			},
			...transformFields(graphqlFields(info as any)),
		});

		return Boolean(bookLike);
	}

	@FieldResolver(() => AggregateBookReview, {
		nullable: false,
	})
	async aggregateBookReview(
		@Root() root: Book,
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: AggregateBookReviewArgs
	): Promise<AggregateBookReview> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return getPrismaFromContext(ctx).bookReview.aggregate({
			...args,
			where: {
				bookId: root.id,
			},
			...transformFields(graphqlFields(info as any)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {
		nullable: false,
	})
	async createBook(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateBookArgs
	): Promise<Book> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.book.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {
		nullable: true,
	})
	async updateBook(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateBookArgs
	): Promise<Book | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.book.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {nullable: true})
	async lockBook(
		@Ctx() ctx: Context,
		@Arg('bookId', () => Int) bookId: number,
		@Arg('lock') lock: boolean
	): Promise<Book | null> {
		return ctx.prisma.book.update({
			where: {
				id: bookId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {nullable: true})
	async deleteBook(@Ctx() ctx: Context, @Args() args: DeleteBookArgs): Promise<Book | null> {
		return ctx.prisma.book.delete({
			...args,
		});
	}

	@Query(() => Book, {
		nullable: true,
	})
	async book(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('bookId', () => Int) bookId: number
	): Promise<Book | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.book.findUnique({
			where: {
				id: bookId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Book], {nullable: true})
	async books(@Args() args: FindManyBookArgs, @Ctx() ctx: Context): Promise<Book[] | null> {
		return ctx.prisma.book.findMany({
			...args,
		});
	}
}
