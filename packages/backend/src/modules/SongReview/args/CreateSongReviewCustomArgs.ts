import * as TypeGraphQL from 'type-graphql';
import {SongReviewCreateCustomInput} from '../inputs/SongReviewCreateCustomInput';

@TypeGraphQL.ArgsType()
export class CreateSongReviewCustomArgs {
	@TypeGraphQL.Field(_type => SongReviewCreateCustomInput, {
		nullable: false,
	})
	data!: SongReviewCreateCustomInput;
}
