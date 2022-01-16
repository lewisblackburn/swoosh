import {CreatePlatformArgs, FindUniquePlatformArgs, Platform} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';
import {GraphQLResolveInfo} from 'graphql';
import {Args, Authorized, Ctx, Info, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import graphqlFields from 'graphql-fields';
import {
	transformFields,
	transformCountFieldIntoSelectRelationsCount,
	getPrismaFromContext,
} from '../../generated/type-graphql/helpers';

@Resolver(Platform)
export class PlatformResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => Platform, {
		nullable: true,
	})
	async platform(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindUniquePlatformArgs
	): Promise<Platform | null> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const {_count} = transformFields(graphqlFields(info as any));
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		return ctx.prisma.platform.findUnique({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Query(() => [Platform], {
		nullable: false,
	})
	async platforms(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindUniquePlatformArgs
	): Promise<Platform[]> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const {_count} = transformFields(graphqlFields(info as any));
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		return ctx.prisma.platform.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Platform, {
		nullable: false,
	})
	async createPlatform(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreatePlatformArgs
	): Promise<Platform> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const {_count} = transformFields(graphqlFields(info as any));
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return getPrismaFromContext(ctx).platform.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
