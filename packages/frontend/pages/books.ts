import {BooksPage} from '@modules/book/BooksPage';
import withApollo from '../lib/withApollo';

export default withApollo({ssr: true})(BooksPage);
