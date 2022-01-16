import { CreatePage } from '@modules/movie/CreatePage';
import withApollo from 'lib/withApollo';

export default withApollo({ ssr: false })(CreatePage);
