import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Ctx, FieldResolver, Info, Query, Resolver, Root} from 'type-graphql';
import {
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
	transformFields,
} from '../../generated/type-graphql/helpers';
import {FindManyUserArgs, UpsertBookArgs, User} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';

@Resolver(User)
export class UserResolver {
	@FieldResolver(() => String)
	email(@Root() user: User, @Ctx() ctx: Context) {
		if (ctx.req.session.userId === user.id) return user.email;
		return '';
	}

	@FieldResolver(() => Boolean)
	async isFollowing(@Root() user: User, @Ctx() ctx: Context): Promise<boolean> {
		if (!ctx.req.session.userId) return false;

		const following = await ctx.prisma.follows.findUnique({
			where: {
				followerId_followingId: {
					followingId: ctx.req.session.userId,
					followerId: user.id,
				},
			},
		});

		return Boolean(following);
	}

	@Query(() => User, {
		nullable: true,
	})
	async user(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('username', () => String) username: String
	): Promise<User | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return getPrismaFromContext(ctx).user.findUnique({
			where: {username},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [User], {
		nullable: false,
	})
	async users(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyUserArgs
	): Promise<User[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.user.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
