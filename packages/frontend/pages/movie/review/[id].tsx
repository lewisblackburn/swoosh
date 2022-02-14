import {MovieReviewPage} from '@modules/movie/MovieReviewPage';
import withApollo from 'lib/withApollo';

export default withApollo({ssr: true})(MovieReviewPage);
