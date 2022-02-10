import {CreatePage} from '@modules/book/CreatePage';
import withApollo from 'lib/withApollo';

export default withApollo({ssr: false})(CreatePage);
