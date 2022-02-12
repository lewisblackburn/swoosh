import argon2d from 'argon2';
import {Arg, Authorized, Ctx, Mutation, Resolver} from 'type-graphql';
import {COOKIE_NAME} from '../../constants';
import {User} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';

@Resolver(User)
export class DeleteResolver {
	@Authorized(['USER', 'ADMIN'])
	@Mutation(() => Boolean)
	async deleteAccount(@Ctx() ctx: Context, @Arg('password') password: string): Promise<boolean> {
		const user = await ctx.prisma.user.findUnique({
			where: {
				id: ctx.req.session.userId,
			},
		});

		if (!user) {
			throw new Error('That user does not exist.');
		}

		const valid = await argon2d.verify(user.password, password);
		if (!valid) {
			throw new Error('Incorrect password');
		}

		const deleteUser = ctx.prisma.user.delete({
			where: {
				id: ctx.req.session.userId,
			},
		});

		const deleteMovieLikes = ctx.prisma.movieLike.deleteMany({
			where: {
				user: {
					id: ctx.req.session.userId,
				},
			},
		});

		const deleteMovieReviews = ctx.prisma.movieReview.deleteMany({
			where: {
				user: {
					id: ctx.req.session.userId,
				},
			},
		});

		const deleteWatchlist = ctx.prisma.watchlist.delete({
			where: {
				userId: ctx.req.session.userId,
			},
		});

		const deleteFollowing = ctx.prisma.follows.deleteMany({
			where: {
				follower: {
					id: ctx.req.session.userId,
				},
			},
		});

		const deleteFollowers = ctx.prisma.follows.deleteMany({
			where: {
				following: {
					id: ctx.req.session.userId,
				},
			},
		});

		const deleteNotifications = ctx.prisma.notification.deleteMany({
			where: {
				userId: ctx.req.session.userId,
			},
		});

		await ctx.prisma.$transaction([
			deleteFollowing,
			deleteFollowers,
			deleteWatchlist,
			deleteNotifications,
			deleteMovieLikes,
			deleteMovieReviews,
			deleteUser,
		]);

		return new Promise(resolve =>
			// eslint-disable-next-line no-promise-executor-return
			ctx.req.session.destroy((err: any) => {
				ctx.res.clearCookie(COOKIE_NAME);
				if (err) {
					console.log(err);
					resolve(false);
					return;
				}

				resolve(true);
			})
		);
	}
}
