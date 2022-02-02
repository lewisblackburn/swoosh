import withApollo from '../lib/withApollo';
import {HomePage} from '../modules/home/HomePage';

export default withApollo({ssr: true})(HomePage);
