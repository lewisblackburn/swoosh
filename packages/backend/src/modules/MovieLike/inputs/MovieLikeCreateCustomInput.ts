import {MovieCreateNestedOneWithoutLikesInput} from '../../../generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('MovieLikeCreateCustomInput', {
	isAbstract: true,
})
export class MovieLikeCreateCustomInput {
	@TypeGraphQL.Field(_type => Date, {
		nullable: true,
	})
	createdAt?: Date | undefined;

	@TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutLikesInput, {
		nullable: false,
	})
	movie!: MovieCreateNestedOneWithoutLikesInput;
}
