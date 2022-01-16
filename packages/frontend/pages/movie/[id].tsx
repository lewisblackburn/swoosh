import withApollo from 'lib/withApollo';
import { MoviePage } from '@modules/movie/MoviePage';

export default withApollo({ ssr: true })(MoviePage);
