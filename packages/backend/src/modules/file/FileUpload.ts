import fs, {createWriteStream} from 'fs';
import {FileUpload, GraphQLUpload} from 'graphql-upload';
import {Arg, Authorized, Ctx, Int, Mutation, registerEnumType, Resolver, UseMiddleware} from 'type-graphql';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

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
		} catch (error) {}

		const writableStream = createWriteStream(location, {
			autoClose: true,
		});

		await ctx.prisma.user.update({
			where: {id: ctx.req.session.userId},
			data: {
				// this will need to change dynamically some how depending on the server url
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
	async uploadThumbnail(
		@Ctx() ctx: Context,
		@Arg('id', () => Int) id: number,
		@Arg('file', () => GraphQLUpload) file: FileUpload
	): Promise<boolean> {
		const {createReadStream, filename} = file;
		const filepath = `${__dirname}/../../../images`;

		const folder = `${filepath}/thumbnail/${id}`;
		const location = `${filepath}/thumbnail/${id}/${filename}`;

		try {
			fs.mkdirSync(folder);
		} catch (error) {}

		const writableStream = createWriteStream(location, {
			autoClose: true,
		});

		await ctx.prisma.movie.update({
			where: {id},
			data: {
				// this will need to change dynamically some how depending on the server url
				thumbnail: `http://localhost:4000/images/thumbnail/${id}/${filename}`,
			},
		});

		return new Promise((res, rej) => {
			createReadStream()
				.pipe(writableStream)
				.on('finish', () => res(true))
				.on('error', () => rej(false));
		});
	}
}
