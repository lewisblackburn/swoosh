import withApollo from "../lib/withApollo";
import { ProfilePage } from "../modules/profile/ProfilePage";

export default withApollo({ ssr: true })(ProfilePage);
