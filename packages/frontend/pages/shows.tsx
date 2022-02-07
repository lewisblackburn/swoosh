import {ShowsPage} from '@modules/show/ShowsPage';
import withApollo from '../lib/withApollo';

export default withApollo({ssr: true})(ShowsPage);
