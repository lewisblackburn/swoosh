import {ArgsType, Field} from 'type-graphql';
import {SongLikeCreateCustomInput} from '../inputs/SongLikeCreateCustomInput';

@ArgsType()
export class CreateSongLikeCustomArgs {
	@Field(() => SongLikeCreateCustomInput, {
		nullable: false,
	})
	data!: SongLikeCreateCustomInput;
}
