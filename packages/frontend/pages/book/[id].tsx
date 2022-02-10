import {BookPage} from '@modules/book/BookPage';
import withApollo from 'lib/withApollo';

export default withApollo({ssr: true})(BookPage);
