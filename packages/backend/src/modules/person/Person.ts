import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreatePersonArgs,
	DeletePersonArgs,
	FindManyPersonArgs,
	Person,
	UpdatePersonArgs,
} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Person)
export class PersonResolver {
	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {
		nullable: false,
	})
	async createPerson(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreatePersonArgs
	): Promise<Person> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.person.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {
		nullable: true,
	})
	async editPerson(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdatePersonArgs
	): Promise<Person | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.person.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {nullable: true})
	async lockPerson(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('lock') lock: boolean
	): Promise<Person | null> {
		return ctx.prisma.person.update({
			where: {
				id: personId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {nullable: true})
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
		@Arg('personId', () => Int) personId: number
	): Promise<Person | null> {
		const {_count} = transformFields(graphqlFields(info as any));
		return ctx.prisma.person.findUnique({
			where: {
				id: personId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Person], {nullable: true})
	async persons(@Args() args: FindManyPersonArgs, @Ctx() ctx: Context): Promise<Person[] | null> {
		// @ts-expect-error unfixable: https://github.com/MichalLytek/typegraphql-prisma/issues/222
		// I think this is related to the career enum in the generated schema
		return ctx.prisma.person.findMany({
			...args,
		});
	}
}
