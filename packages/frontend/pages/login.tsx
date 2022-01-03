import {LoginPage} from '../modules/login/LoginPage';
import withApollo from '../lib/withApollo';

export default withApollo({ssr: false})(LoginPage);
