import {WatchlistUpdateInput} from '../../../generated/type-graphql';
import {ArgsType, Field} from 'type-graphql';

@ArgsType()
export class UpdateWatchlistCustomArgs {
	@Field(() => WatchlistUpdateInput, {
		nullable: false,
	})
	data!: WatchlistUpdateInput;
}
