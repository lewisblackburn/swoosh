import {SongCreateNestedOneWithoutLikesInput} from '../../../generated/type-graphql';
import {Field, InputType} from 'type-graphql';

@InputType('SongLikeCreateCustomInput', {
	isAbstract: true,
})
export class SongLikeCreateCustomInput {
	@Field(() => Date, {
		nullable: true,
	})
	createdAt?: Date | undefined;

	@Field(() => SongCreateNestedOneWithoutLikesInput, {
		nullable: false,
	})
	song!: SongCreateNestedOneWithoutLikesInput;
}
