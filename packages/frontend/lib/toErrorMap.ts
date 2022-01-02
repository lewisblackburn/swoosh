export const toErrorMap = (e: any) => {
	const errors = e.graphQLErrors[0].extensions.exception.validationErrors;
	const errorMap: Record<string, string> = {};
	errors.forEach(({property, constraints}: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		errorMap[property] = constraints[Object.keys(constraints)[0]];
	});

	return errorMap;
};
