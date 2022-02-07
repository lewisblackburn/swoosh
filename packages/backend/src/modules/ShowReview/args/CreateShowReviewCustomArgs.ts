import * as TypeGraphQL from 'type-graphql';
import {ShowReviewCreateCustomInput} from '../inputs/ShowReviewCreateCustomInput';

@TypeGraphQL.ArgsType()
export class CreateShowReviewCustomArgs {
	@TypeGraphQL.Field(_type => ShowReviewCreateCustomInput, {
		nullable: false,
	})
	data!: ShowReviewCreateCustomInput;
}
