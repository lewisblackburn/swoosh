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
	AggregatePersonReview,
	AggregatePersonReviewArgs,
	CreatePersonArgs,
	DeletePersonArgs,
	FindManyPersonArgs,
	Person,
	UpdatePersonArgs,
} from '../../generated/type-graphql';
import {
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
	transformFields,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Person)
export class PersonResolver {
	@FieldResolver(() => Boolean, {
		nullable: false,
	})
	async isLiked(@Root() root: Person, @Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<boolean> {
		if (!ctx.req.session.userId) {
			throw new Error('No User');
		}

		const personLike = await ctx.prisma.personLike.findUnique({
			where: {
				userId_personId: {
					personId: root.id,
					userId: ctx.req.session.userId,
				},
			},
			...transformFields(graphqlFields(info as any)),
		});

		return Boolean(personLike);
	}

	@FieldResolver(() => AggregatePersonReview, {
		nullable: false,
	})
	async aggregatePersonReview(
		@Root() root: Person,
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: AggregatePersonReviewArgs
	): Promise<AggregatePersonReview> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return getPrismaFromContext(ctx).personReview.aggregate({
			...args,
			where: {
				personId: root.id,
			},
			...transformFields(graphqlFields(info as any)),
		});
	}

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
		return ctx.prisma.person.findMany({
			...args,
		});
	}
}
