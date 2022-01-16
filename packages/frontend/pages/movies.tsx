import { MoviesPage } from '@modules/movie/MoviesPage';
import withApollo from '../lib/withApollo';

export default withApollo({ ssr: true })(MoviesPage);
