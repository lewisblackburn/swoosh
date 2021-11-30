import { Context } from "../../interfaces/context";
import { Arg, Args, Authorized, Ctx, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { Person, CreatePersonArgs, DeletePersonArgs, FindManyPersonArgs, UpdatePersonArgs } from "../../generated/type-graphql";
import { ErrorInterceptor } from "../middleware/ErrorInterceptor";

@Resolver(Person) export class PersonResolver {
    @Authorized(["ADMIN", "USER"])
    @UseMiddleware(ErrorInterceptor)
    @Mutation(() => Person, {
        nullable: false
    })
    async createPerson(
        @Ctx() ctx: Context,
        @Args() args: CreatePersonArgs
    ): Promise<Person> {
        return ctx.prisma.person.create({
            data: {
                career: args.data.career,
                name: args.data.name
            }
        });
    }

    @Authorized(["ADMIN", "USER"])
    @UseMiddleware(ErrorInterceptor)
    @Mutation(() => Person, { nullable: true })
    async editPerson(
        @Ctx() ctx: Context,
        @Args() args: UpdatePersonArgs
    ): Promise<Person | null> {
        return ctx.prisma.person.update({
            where: {
                id: args.where.id
            },
            data: {
                name: args.data.name,
                career: args.data.career
            },
        })
    }

    @Authorized(["ADMIN"])
    @UseMiddleware(ErrorInterceptor)
    @Mutation(() => Person, { nullable: true })
    async deletePerson(
        @Ctx() ctx: Context,
        @Args() args: DeletePersonArgs
    ): Promise<Person | null> {
        return ctx.prisma.person.delete({
            ...args
        })
    }


    @Query(() => Person, { nullable: true })
    async person(
        @Arg("personId", () => Int) personId: number,
        @Ctx() ctx: Context
    ): Promise<Person | null> {
        return ctx.prisma.person.findUnique({
            where: {
                id: personId
            }
        })
    }


    @Query(() => [Person], { nullable: true })
    async people(
        @Ctx() ctx: Context,
        @Args() args: FindManyPersonArgs
    ): Promise<Person[] | null> {
        return ctx.prisma.person.findMany({ ...args })
    }
}
