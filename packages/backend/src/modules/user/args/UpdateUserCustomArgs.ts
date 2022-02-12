import {UserUpdateInput} from '../../../generated/type-graphql';
import {ArgsType, Field} from 'type-graphql';

@ArgsType()
export class UpdateUserCustomArgs {
	@Field(() => UserUpdateInput, {
		nullable: false,
	})
	data!: UserUpdateInput;
}
