import {
	MovieReviewLikeCreateNestedManyWithoutMovieReviewInput,
	MovieCreateNestedOneWithoutReviewsInput,
} from '../../generated/type-graphql';
import {Field, InputType, Int} from 'type-graphql';

@InputType('MovieReviewCustomCreateInput', {
	isAbstract: true,
})
export class MovieReviewCustomCreateInput {
	@Field(() => String, {
		nullable: true,
	})
	review?: string | undefined;

	@Field(() => Int, {
		nullable: false,
	})
	rating!: number;

	@Field(() => MovieReviewLikeCreateNestedManyWithoutMovieReviewInput, {
		nullable: true,
	})
	likes?: MovieReviewLikeCreateNestedManyWithoutMovieReviewInput | undefined;

	@Field(() => MovieCreateNestedOneWithoutReviewsInput, {
		nullable: false,
	})
	movie!: MovieCreateNestedOneWithoutReviewsInput;
}
