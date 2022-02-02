import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	BookReviewLike,
	CreateBookReviewLikeArgs,
	DeleteBookReviewLikeArgs,
	FindManyBookReviewLikeArgs,
} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(BookReviewLike)
export class BookReviewLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [BookReviewLike], {
		nullable: false,
	})
	async bookReviewLikes(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyBookReviewLikeArgs
	): Promise<BookReviewLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.bookReviewLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => BookReviewLike, {
		nullable: false,
	})
	async createBookReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateBookReviewLikeArgs
	): Promise<BookReviewLike> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.bookReviewLike.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Mutation(() => BookReviewLike, {
		nullable: true,
	})
	async deleteBookReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteBookReviewLikeArgs
	): Promise<BookReviewLike | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.bookReviewLike.delete({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
