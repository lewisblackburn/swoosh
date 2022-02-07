import {MovieCreateNestedOneWithoutLikesInput} from '../../../generated/type-graphql';
import {Field, InputType} from 'type-graphql';

@InputType('MovieLikeCreateCustomInput', {
	isAbstract: true,
})
export class MovieLikeCreateCustomInput {
	@Field(() => Date, {
		nullable: true,
	})
	createdAt?: Date | undefined;

	@Field(() => MovieCreateNestedOneWithoutLikesInput, {
		nullable: false,
	})
	movie!: MovieCreateNestedOneWithoutLikesInput;
}
