import {useRouter} from 'next/router';

export const useGetStringId = (): string => {
	const router = useRouter();
	const stringId = typeof router.query.username === 'string' ? router.query.username.toString() : '';

	return stringId;
};
