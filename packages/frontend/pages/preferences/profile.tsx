import { ProfilePage } from '@modules/preferences/ProfilePage';
import withApollo from 'lib/withApollo';

export default withApollo({ ssr: false })(ProfilePage);
