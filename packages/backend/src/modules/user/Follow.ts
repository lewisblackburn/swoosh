import { User } from "../../generated/type-graphql";
import { Context } from "backend/src/interfaces/context";
import {
    Arg,
    Authorized,
    Ctx,
    Int,
    Mutation,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { ErrorInterceptor } from "../middleware/ErrorInterceptor";

@Resolver(User)
export class FollowResolver {
    @Authorized(["USER", "ADMIN"])
    @UseMiddleware(ErrorInterceptor)
    @Mutation(() => Boolean)
    async follow(
        @Arg("userId", () => Int) userId: number,
        @Ctx() ctx: Context): Promise<boolean> {
        if (userId === ctx.req.session.userId)
            throw new Error("You can't follow yourself");

        const follow = await ctx.prisma.user.update({
            where: {
                id: ctx.req.session.userId,
            },
            data: {
                following: {
                    connect: { id: userId },
                },
            },
        });
        return !!follow;
    }

    @Authorized(["USER", "ADMIN"])
    @UseMiddleware(ErrorInterceptor)
    @Mutation(() => Boolean)
    async unfollow(
        @Arg("userId", () => Int) userId: number,
        @Ctx() ctx: Context
    ): Promise<boolean> {
        if (userId === ctx.req.session.userId)
            throw new Error("You can't unfollow yourself");

        const follow = await ctx.prisma.user.update({
            where: {
                id: ctx.req.session.userId,
            },
            data: {
                following: {
                    disconnect: { id: userId },
                },
            },
        });
        return !!follow;
    }
}
