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
	AggregateShowReview,
	AggregateShowReviewArgs,
	CreateShowArgs,
	DeleteShowArgs,
	FindManyShowArgs,
	Show,
	UpdateShowArgs,
} from '../../generated/type-graphql';
import {
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
	transformFields,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Show)
export class ShowResolver {
	@FieldResolver(() => Boolean, {
		nullable: false,
	})
	async isLiked(@Root() root: Show, @Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<boolean> {
		if (!ctx.req.session.userId) {
			throw new Error('No User');
		}

		const showLike = await ctx.prisma.showLike.findUnique({
			where: {
				userId_showId: {
					userId: ctx.req.session.userId,
					showId: root.id,
				},
			},
			...transformFields(graphqlFields(info as any)),
		});

		return Boolean(showLike);
	}

	@FieldResolver(() => AggregateShowReview, {
		nullable: false,
	})
	async aggregateShowReview(
		@Root() root: Show,
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: AggregateShowReviewArgs
	): Promise<AggregateShowReview> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return getPrismaFromContext(ctx).showReview.aggregate({
			...args,
			where: {
				showId: root.id,
			},
			...transformFields(graphqlFields(info as any)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, {
		nullable: false,
	})
	async createShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateShowArgs
	): Promise<Show> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.show.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, {
		nullable: true,
	})
	async updateShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateShowArgs
	): Promise<Show | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.show.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, {nullable: true})
	async lockShow(
		@Ctx() ctx: Context,
		@Arg('showId', () => Int) showId: number,
		@Arg('lock') lock: boolean
	): Promise<Show | null> {
		return ctx.prisma.show.update({
			where: {
				id: showId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Show, {nullable: true})
	async deleteShow(@Ctx() ctx: Context, @Args() args: DeleteShowArgs): Promise<Show | null> {
		return ctx.prisma.show.delete({
			...args,
		});
	}

	@Query(() => Show, {
		nullable: true,
	})
	async show(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('showId', () => Int) showId: number
	): Promise<Show | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.show.findUnique({
			where: {
				id: showId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Show], {nullable: true})
	async shows(@Args() args: FindManyShowArgs, @Ctx() ctx: Context): Promise<Show[] | null> {
		return ctx.prisma.show.findMany({
			...args,
		});
	}
}
