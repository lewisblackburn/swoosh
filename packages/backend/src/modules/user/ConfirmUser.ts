import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Context } from '../../interfaces/context';
import { redis } from '../../redis';
import { UserConfirmationPrefixes } from '../shared/userConfirmationPrefixes';

@Resolver()
export class ConfirmUserResolver {
	@Mutation(() => Boolean)
	async confirm(@Arg('token') token: string, @Ctx() ctx: Context): Promise<boolean> {
		if (!ctx.req.session.userId) return false;

		const exists = await redis.get(UserConfirmationPrefixes.confirmUser + token).then(t => {
			if (t === null) return false;
			return true;
		});

		if (!exists) return false;

		await redis.del(UserConfirmationPrefixes.confirmUser + token);
		await ctx.prisma.user.update({
			data: {
				confirmed: true,
			},
			where: {
				id: ctx.req.session.userId,
			},
		});

		return true;
	}
}
