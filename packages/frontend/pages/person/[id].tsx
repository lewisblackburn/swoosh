import {PersonPage} from '@modules/person/PersonPage';
import withApollo from 'lib/withApollo';

export default withApollo({ssr: true})(PersonPage);
