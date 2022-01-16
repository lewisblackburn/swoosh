import { PeoplePage } from '@modules/person/PeoplePage';
import withApollo from '../lib/withApollo';

export default withApollo({ ssr: true })(PeoplePage);
