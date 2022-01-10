import Command from './command';

export default interface Option {
	key: number;
	label: string;
	commands: Command[];
}
