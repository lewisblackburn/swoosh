import {EditPage} from '@modules/movie/EditPage';
import withApollo from 'lib/withApollo';

export default withApollo({ssr: false})(EditPage);
