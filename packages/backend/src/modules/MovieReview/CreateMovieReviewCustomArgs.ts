import {ArgsType, Field} from 'type-graphql';
import {MovieReviewCustomCreateInput} from './MovieReviewCustomCreateInput';

@ArgsType()
export class CreateMovieReviewCustomArgs {
	@Field(() => MovieReviewCustomCreateInput, {
		nullable: false,
	})
	data!: MovieReviewCustomCreateInput;
}
