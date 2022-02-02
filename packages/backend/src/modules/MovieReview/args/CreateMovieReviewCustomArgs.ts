import * as TypeGraphQL from 'type-graphql';
import {MovieReviewCreateCustomInput} from '../inputs/MovieReviewCreateCustomInput';

@TypeGraphQL.ArgsType()
export class CreateMovieReviewCustomArgs {
	@TypeGraphQL.Field(_type => MovieReviewCreateCustomInput, {
		nullable: false,
	})
	data!: MovieReviewCreateCustomInput;
}
