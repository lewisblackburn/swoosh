import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Ctx, FieldResolver, Info, Query, Resolver, Root} from 'type-graphql';
import {FindManyUserArgs, User} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';

@Resolver(User)
export class UserResolver {
	@FieldResolver(() => String)
	email(@Root() user: User, @Ctx() ctx: Context) {
		if (ctx.req.session.userId === user.id) return user.email;
		return '';
	}

	@Query(() => User, {nullable: true})
	async user(@Arg('username', () => String) username: string, @Ctx() ctx: Context) {
		return ctx.prisma.user.findUnique({
			where: {username},
		});
	}

	@Query(() => [User], {
		nullable: false,
	})
	async users(@Ctx() ctx: Context, @Info() info: GraphQLResolveInfo, @Args() args: FindManyUserArgs): Promise<User[]> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.user.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
