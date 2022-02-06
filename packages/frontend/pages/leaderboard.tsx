import {LeaderboardPage} from '@modules/leaderboard/LeaderboardPage';
import withApollo from '../lib/withApollo';

export default withApollo({ssr: true})(LeaderboardPage);
