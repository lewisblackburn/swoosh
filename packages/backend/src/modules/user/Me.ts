import { transformFields, transformCountFieldIntoSelectRelationsCount } from '../../generated/type-graphql/helpers';
import { Ctx, Info, Query, Resolver } from 'type-graphql';
import { User } from '../../generated/type-graphql';
import { Context } from '../../interfaces/context';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(User)
export class MeResolver {
	@Query(() => User, { nullable: true })
	async me(@Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<User | null> {
		const { _count } = transformFields(graphqlFields(info as any));

		if (!ctx.req.session.userId) return null;
		return ctx.prisma.user.findUnique({
			where: {
				id: ctx.req.session.userId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
