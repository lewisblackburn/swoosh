import {ArgsType, Field} from 'type-graphql';
import {ShowLikeCreateCustomInput} from '../inputs/ShowLikeCreateCustomInput';

@ArgsType()
export class CreateShowLikeCustomArgs {
	@Field(() => ShowLikeCreateCustomInput, {
		nullable: false,
	})
	data!: ShowLikeCreateCustomInput;
}
