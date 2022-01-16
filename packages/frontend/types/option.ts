import Command from './command';

export default interface Option {
	key: string;
	label: string;
	commands: Command[];
}
