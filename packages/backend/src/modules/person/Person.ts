import { Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import graphqlFields from 'graphql-fields';
import { Context } from '../../interfaces/context';
import {
	Person,
	CreatePersonArgs,
	DeletePersonArgs,
	FindManyPersonArgs,
	UpdatePersonArgs,
	FindUniquePersonArgs,
} from '../../generated/type-graphql';
import { ErrorInterceptor } from '../middleware/ErrorInterceptor';
import {
	transformFields,
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
} from '../../generated/type-graphql/helpers';

@Resolver(Person)
export class PersonResolver {
	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {
		nullable: false,
	})
	async createPerson(@Ctx() ctx: Context, @Args() args: CreatePersonArgs): Promise<Person> {
		return ctx.prisma.person.create({
			data: {
				career: args.data.career,
				name: args.data.name,
			},
		});
	}

	@Authorized(['ADMIN', 'USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, { nullable: true })
	async editPerson(@Ctx() ctx: Context, @Args() args: UpdatePersonArgs): Promise<Person | null> {
		return ctx.prisma.person.update({
			where: {
				id: args.where.id,
			},
			data: {
				name: args.data.name,
				career: args.data.career,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, { nullable: true })
	async deletePerson(@Ctx() ctx: Context, @Args() args: DeletePersonArgs): Promise<Person | null> {
		return ctx.prisma.person.delete({
			...args,
		});
	}

	@Query(() => Person, {
		nullable: true,
	})
	async person(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindUniquePersonArgs
	): Promise<Person | null> {
		const { _count } = transformFields(graphqlFields(info as any));
		return getPrismaFromContext(ctx).person.findUnique({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Person], { nullable: true })
	async people(@Ctx() ctx: Context, @Args() args: FindManyPersonArgs): Promise<Person[] | null> {
		return ctx.prisma.person.findMany({ ...args });
	}
}
