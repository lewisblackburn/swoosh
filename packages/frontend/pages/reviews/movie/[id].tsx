import {MovieReviewsPage} from '@modules/reviews/movie/MovieReviewsPage';
import withApollo from 'lib/withApollo';

export default withApollo({ssr: true})(MovieReviewsPage);
