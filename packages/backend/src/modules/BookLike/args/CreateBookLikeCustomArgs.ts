import {ArgsType, Field} from 'type-graphql';
import {BookLikeCreateCustomInput} from '../inputs/BookLikeCreateCustomInput';

@ArgsType()
export class CreateBookLikeCustomArgs {
	@Field(() => BookLikeCreateCustomInput, {
		nullable: false,
	})
	data!: BookLikeCreateCustomInput;
}
