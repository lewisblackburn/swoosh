import {
	BookCreateNestedOneWithoutReviewsInput,
	BookReviewLikeCreateNestedManyWithoutBookReviewInput,
} from '../../../generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('BookReviewCreateCustomInput', {
	isAbstract: true,
})
export class BookReviewCreateCustomInput {
	@TypeGraphQL.Field(_type => String, {
		nullable: true,
	})
	review?: string | undefined;

	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	rating!: number;

	@TypeGraphQL.Field(_type => BookReviewLikeCreateNestedManyWithoutBookReviewInput, {
		nullable: true,
	})
	likes?: BookReviewLikeCreateNestedManyWithoutBookReviewInput | undefined;

	@TypeGraphQL.Field(_type => BookCreateNestedOneWithoutReviewsInput, {
		nullable: false,
	})
	book!: BookCreateNestedOneWithoutReviewsInput;
}
