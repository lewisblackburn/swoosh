import {
	ShowCreateNestedOneWithoutReviewsInput,
	ShowReviewLikeCreateNestedManyWithoutShowReviewInput,
} from '../../../generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('ShowReviewCreateCustomInput', {
	isAbstract: true,
})
export class ShowReviewCreateCustomInput {
	@TypeGraphQL.Field(_type => String, {
		nullable: true,
	})
	review?: string | undefined;

	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	rating!: number;

	@TypeGraphQL.Field(_type => ShowReviewLikeCreateNestedManyWithoutShowReviewInput, {
		nullable: true,
	})
	likes?: ShowReviewLikeCreateNestedManyWithoutShowReviewInput | undefined;

	@TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutReviewsInput, {
		nullable: false,
	})
	show!: ShowCreateNestedOneWithoutReviewsInput;
}
