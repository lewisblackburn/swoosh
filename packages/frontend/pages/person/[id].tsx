import withApollo from 'lib/withApollo';
import { PersonPage } from '@modules/person/PersonPage';

export default withApollo({ ssr: true })(PersonPage);
