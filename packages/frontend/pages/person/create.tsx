import { CreatePage } from '@modules/person/CreatePage';
import withApollo from 'lib/withApollo';

export default withApollo({ ssr: false })(CreatePage);
