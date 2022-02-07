import {
	SongCreateNestedOneWithoutReviewsInput,
	SongReviewLikeCreateNestedManyWithoutSongReviewInput,
} from '../../../generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('SongReviewCreateCustomInput', {
	isAbstract: true,
})
export class SongReviewCreateCustomInput {
	@TypeGraphQL.Field(_type => String, {
		nullable: true,
	})
	review?: string | undefined;

	@TypeGraphQL.Field(_type => TypeGraphQL.Int, {
		nullable: false,
	})
	rating!: number;

	@TypeGraphQL.Field(_type => SongReviewLikeCreateNestedManyWithoutSongReviewInput, {
		nullable: true,
	})
	likes?: SongReviewLikeCreateNestedManyWithoutSongReviewInput | undefined;

	@TypeGraphQL.Field(_type => SongCreateNestedOneWithoutReviewsInput, {
		nullable: false,
	})
	song!: SongCreateNestedOneWithoutReviewsInput;
}
