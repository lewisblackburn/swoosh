import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {ShowReview} from '../../generated/type-graphql/models/ShowReview';
import {FindManyShowReviewArgs} from '../../generated/type-graphql/resolvers/crud/ShowReview/args';
import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateMovieReviewArgs} from '../../generated/type-graphql';

@Resolver(ShowReview)
export class ShowReviewResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [ShowReview], {
		nullable: false,
	})
	async showReviews(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyShowReviewArgs
	): Promise<ShowReview[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.showReview.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => ShowReview, {
		nullable: false,
	})
	async createShowReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateMovieReviewArgs
	): Promise<ShowReview> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.showReview.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
