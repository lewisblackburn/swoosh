import withApollo from 'lib/withApollo';
import { UserPage } from '@modules/user/UserPage';

export default withApollo({ ssr: true })(UserPage);
