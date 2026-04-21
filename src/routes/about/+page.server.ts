import { differenceInYears } from 'date-fns';

export async function load() {
	const birthday = new Date(2002, 10, 3);
	const today = new Date();
	const age = differenceInYears(today, birthday);
	return { age };
}
