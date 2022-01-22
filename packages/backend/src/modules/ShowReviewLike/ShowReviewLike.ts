import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreateShowReviewLikeArgs,
	DeleteShowReviewLikeArgs,
	FindManyShowReviewLikeArgs,
	ShowReviewLike,
} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(ShowReviewLike)
export class ShowReviewLikeResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [ShowReviewLike], {
		nullable: false,
	})
	async showReviewLikes(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyShowReviewLikeArgs
	): Promise<ShowReviewLike[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.showReviewLike.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => ShowReviewLike, {
		nullable: false,
	})
	async createShowReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateShowReviewLikeArgs
	): Promise<ShowReviewLike> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.showReviewLike.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Mutation(() => ShowReviewLike, {
		nullable: true,
	})
	async deleteShowReviewLike(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: DeleteShowReviewLikeArgs
	): Promise<ShowReviewLike | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.showReviewLike.delete({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
