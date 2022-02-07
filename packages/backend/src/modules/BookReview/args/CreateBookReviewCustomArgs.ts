import * as TypeGraphQL from 'type-graphql';
import {BookReviewCreateCustomInput} from '../inputs/BookReviewCreateCustomInput';

@TypeGraphQL.ArgsType()
export class CreateBookReviewCustomArgs {
	@TypeGraphQL.Field(_type => BookReviewCreateCustomInput, {
		nullable: false,
	})
	data!: BookReviewCreateCustomInput;
}
