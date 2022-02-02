/* eslint-disable */
// WARN: This is temporary until I can fix the eslint errors

import {PrismaClient} from '@prisma/client';

export const prisma = new PrismaClient({
	log: ['query', 'warn', 'error'],
});

// Query time
prisma.$use(async (params, next) => {
	const before = Date.now();
	const result = await next(params);
	const after = Date.now();
	console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
	return result;
});

// Max query return limit
prisma.$use(async (params, next) => {
	const limit = 20;

	const isFindMany = params.action === 'findMany';
	// I don't think this is needed anymore, however I'm leaving it in for now as a reminder
	// const isNested = Boolean(params.args.select);

	if (!isFindMany) return next(params);

	const takeParameter = params.args.take;
	const takeParameterIsUndefined = takeParameter === undefined;

	if (takeParameterIsUndefined || takeParameter > limit) {
		params.args.take = limit;
	}

	// Same reasoning as above
	// if (isNested) {
	// 	const key = Object.keys(params.args.select)[0];
	// 	if (
	// 		params.args.select[key]?.take > limit ||
	// 		Object.entries(params.args.select[key]).length === 0 // If not specified
	// 	) {
	// 		params.args.select[key].take = limit;
	// 	}
	// }

	return next(params);
});
