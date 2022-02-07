import {ArgsType, Field} from 'type-graphql';
import {MovieLikeCreateCustomInput} from '../inputs/MovieLikeCreateCustomInput';

@ArgsType()
export class CreateMovieLikeCustomArgs {
	@Field(() => MovieLikeCreateCustomInput, {
		nullable: false,
	})
	data!: MovieLikeCreateCustomInput;
}
