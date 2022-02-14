export function floatToTime(time: number): string {
	const [hours, minutes] = time.toString().split('.');

	return `${hours}:${minutes}`;
}
