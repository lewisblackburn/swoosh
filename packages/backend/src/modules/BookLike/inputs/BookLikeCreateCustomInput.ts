import {BookCreateNestedOneWithoutLikesInput} from '../../../generated/type-graphql';
import {Field, InputType} from 'type-graphql';

@InputType('BookLikeCreateCustomInput', {
	isAbstract: true,
})
export class BookLikeCreateCustomInput {
	@Field(() => Date, {
		nullable: true,
	})
	createdAt?: Date | undefined;

	@Field(() => BookCreateNestedOneWithoutLikesInput, {
		nullable: false,
	})
	book!: BookCreateNestedOneWithoutLikesInput;
}
