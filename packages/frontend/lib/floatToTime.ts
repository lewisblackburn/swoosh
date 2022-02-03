export function floatToTime(time: number): string {
	const minutes = Math.floor(time);
	const seconds = Math.round((time - minutes) * 60);
	return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
