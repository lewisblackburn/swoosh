import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {FindManyShowReviewArgs, ShowReview, UpdateShowReviewArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {CreateShowReviewCustomArgs} from './args/CreateShowReviewCustomArgs';

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
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createShowReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateShowReviewCustomArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const showReview = await ctx.prisma.showReview.create({
			data: {
				rating: args.data.rating,
				review: args.data.review,
				show: {
					...args.data.show,
				},
				user: {
					connect: {
						id: ctx.req.session.userId,
					},
				},
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(showReview);
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => ShowReview, {
		nullable: false,
	})
	async updateShowReview(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateShowReviewArgs
	): Promise<ShowReview> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.showReview.update({
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
	async deleteShowReview(@Ctx() ctx: Context, @Arg('showId', () => Int) showId: number): Promise<boolean> {
		if (ctx.req.session.userId === undefined) {
			throw new Error('User not logged in');
		}

		const showReview = await ctx.prisma.showReview.delete({
			where: {
				userId_showId: {
					userId: ctx.req.session.userId,
					showId,
				},
			},
		});

		return Boolean(showReview);
	}
}
