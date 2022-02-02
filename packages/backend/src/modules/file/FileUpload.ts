/* eslint-disable @typescript-eslint/restrict-template-expressions */
import fs, {createWriteStream} from 'fs';
import {FileUpload, GraphQLUpload} from 'graphql-upload';
import {Arg, Authorized, Ctx, Int, Mutation, Resolver, UseMiddleware} from 'type-graphql';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {UploadType} from './utils/uploadType';

@Resolver()
export class FileUploadResolver {
	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean)
	async uploadAvatar(@Ctx() ctx: Context, @Arg('file', () => GraphQLUpload) file: FileUpload): Promise<boolean> {
		const {createReadStream, filename} = file;
		const filepath = `${__dirname}/../../../images`;

		const folder = `${filepath}/${ctx.req.session.userId}`;
		const location = `${filepath}/${ctx.req.session.userId}/${filename}`;

		try {
			fs.mkdirSync(folder);
		} catch {}

		const writableStream = createWriteStream(location, {
			autoClose: true,
		});

		await ctx.prisma.user.update({
			where: {id: ctx.req.session.userId},
			data: {
				//This will need to change dynamically some how depending on the server url
				avatar: `http://localhost:4000/images/${ctx.req.session.userId}/${filename}`,
			},
		});

		return new Promise((res, rej) => {
			createReadStream()
				.pipe(writableStream)
				.on('finish', () => res(true))
				.on('error', () => rej(false));
		});
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean)
	async uploadPoster(
		@Ctx() ctx: Context,
		@Arg('id', () => Int) id: number,
		@Arg('file', () => GraphQLUpload) file: FileUpload,
		@Arg('type', () => UploadType) type: UploadType
	): Promise<boolean> {
		const {createReadStream, filename} = file;
		const filepath = `${__dirname}/../../../images`;

		const folder = `${filepath}/poster/${type}/${id}`;
		const location = `${filepath}/poster/${type}/${id}/${filename}`;

		try {
			fs.mkdirSync(folder);
		} catch {}

		const writableStream = createWriteStream(location, {
			autoClose: true,
		});

		// this will need to change dynamically some how depending on the server url
		const serverLocation = `http://localhost:4000/images/poster/${type}/${id}/${filename}`;

		switch (type) {
			case UploadType.Movie:
				await ctx.prisma.movie.update({
					where: {id},
					data: {
						poster: serverLocation,
					},
				});
				break;
			case UploadType.Person:
				await ctx.prisma.person.update({
					where: {id},
					data: {
						poster: serverLocation,
					},
				});
				break;
			case UploadType.Song:
				await ctx.prisma.song.update({
					where: {id},
					data: {
						poster: serverLocation,
					},
				});
				break;
			case UploadType.Book:
				await ctx.prisma.book.update({
					where: {id},
					data: {
						poster: serverLocation,
					},
				});
				break;

			default:
				break;
		}

		return new Promise((res, rej) => {
			createReadStream()
				.pipe(writableStream)
				.on('finish', () => res(true))
				.on('error', () => rej(false));
		});
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Boolean)
	async uploadBackdrop(
		@Ctx() ctx: Context,
		@Arg('id', () => Int) id: number,
		@Arg('file', () => GraphQLUpload) file: FileUpload,
		@Arg('type', () => UploadType) type: UploadType
	): Promise<boolean> {
		const {createReadStream, filename} = file;
		const filepath = `${__dirname}/../../../images`;

		const folder = `${filepath}/backdrop/${type}/${id}`;
		const location = `${filepath}/backdrop/${type}/${id}/${filename}`;

		try {
			fs.mkdirSync(folder);
		} catch {}

		const writableStream = createWriteStream(location, {
			autoClose: true,
		});

		// This will need to change dynamically some how depending on the server url
		const serverLocation = `http://localhost:4000/images/backdrop/${type}/${id}/${filename}`;

		switch (type) {
			case UploadType.Movie:
				await ctx.prisma.movie.update({
					where: {id},
					data: {
						backdrop: serverLocation,
					},
				});
				break;

			default:
				break;
		}

		return new Promise((res, rej) => {
			createReadStream()
				.pipe(writableStream)
				.on('finish', () => res(true))
				// eslint-disable-next-line prefer-promise-reject-errors
				.on('error', () => rej(false));
		});
	}
}
