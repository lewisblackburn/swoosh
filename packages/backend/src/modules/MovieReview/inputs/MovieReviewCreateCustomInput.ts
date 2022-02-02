import {
	MovieCreateNestedOneWithoutReviewsInput,
	MovieReviewLikeCreateNestedManyWithoutMovieReviewInput,
} from '../../../generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('MovieReviewCreateCustomInput', {
	isAbstract: true,
})
export class MovieReviewCreateCustomInput {
	@TypeGraphQL.Field(_type => String, {
		nullable: true,
	})
	review?: string | undefined;

	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	rating!: number;

	@TypeGraphQL.Field(_type => MovieReviewLikeCreateNestedManyWithoutMovieReviewInput, {
		nullable: true,
	})
	likes?: MovieReviewLikeCreateNestedManyWithoutMovieReviewInput | undefined;

	@TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutReviewsInput, {
		nullable: false,
	})
	movie!: MovieCreateNestedOneWithoutReviewsInput;
}
