import {ShowCreateNestedOneWithoutLikesInput} from '../../../generated/type-graphql';
import {Field, InputType} from 'type-graphql';

@InputType('ShowLikeCreateCustomInput', {
	isAbstract: true,
})
export class ShowLikeCreateCustomInput {
	@Field(() => Date, {
		nullable: true,
	})
	createdAt?: Date | undefined;

	@Field(() => ShowCreateNestedOneWithoutLikesInput, {
		nullable: false,
	})
	show!: ShowCreateNestedOneWithoutLikesInput;
}
