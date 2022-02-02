import {Arg, Args, Authorized, Ctx, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {Book, CreateBookArgs, DeleteBookArgs, UpdateBookArgs} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Book)
export class BookResolver {
	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {nullable: true})
	async createBook(@Ctx() ctx: Context, @Args() args: CreateBookArgs): Promise<Book | null> {
		return ctx.prisma.book.create({
			data: {
				title: args.data.title,
				description: args.data.description,
			},
		});
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {nullable: true})
	async editBook(@Ctx() ctx: Context, @Args() args: UpdateBookArgs): Promise<Book | null> {
		return ctx.prisma.book.update({
			data: {
				title: args.data.title,
				description: args.data.description,
			},
			where: {
				id: args.where.id,
			},
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

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {nullable: true})
	async addArtist(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('bookId', () => Int) bookId: number
	): Promise<Book | null> {
		return ctx.prisma.book.update({
			where: {
				id: bookId,
			},
			data: {
				authors: {
					connect: {
						id: personId,
					},
				},
			},
		});
	}

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Book, {nullable: true})
	async removeArtist(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('bookId', () => Int) bookId: number
	): Promise<Book | null> {
		return ctx.prisma.book.update({
			where: {
				id: bookId,
			},
			data: {
				authors: {
					disconnect: {
						id: personId,
					},
				},
			},
		});
	}

	@Query(() => Book, {nullable: true})
	async book(@Arg('bookId', () => Int) bookId: number, @Ctx() ctx: Context): Promise<Book | null> {
		return ctx.prisma.book.findUnique({
			where: {
				id: bookId,
			},
		});
	}

	@Query(() => [Book], {nullable: true})
	async books(@Arg('title', () => String) title: string, @Ctx() ctx: Context): Promise<Book[] | null> {
		return ctx.prisma.book.findMany({
			where: {
				title: {
					contains: title,
				},
			},
		});
	}
}
