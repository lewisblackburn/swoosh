import {SongsPage} from '@modules/song/SongsPage';
import withApollo from '../lib/withApollo';

export default withApollo({ssr: true})(SongsPage);
