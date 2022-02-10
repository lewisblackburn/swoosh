import withApollo from 'lib/withApollo';
import {SongPage} from '@modules/song/SongPage';

export default withApollo({ssr: true})(SongPage);
