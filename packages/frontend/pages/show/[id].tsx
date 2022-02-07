import withApollo from 'lib/withApollo';
import {ShowPage} from '@modules/show/ShowPage';

export default withApollo({ssr: true})(ShowPage);
