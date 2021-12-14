import {buildSchema} from 'type-graphql';
import {
	ActorInMovieRelationsResolver,
	BookRelationsResolver,
	MovieRelationsResolver,
	PersonRelationsResolver,
	SongRelationsResolver,
	UserRelationsResolver,
} from '../generated/type-graphql';
import {BookResolver} from '../modules/book/Book';
import {FileUploadResolver} from '../modules/file/FileUpload';
import {authChecker} from '../modules/middleware/authChecker';
import {MovieResolver} from '../modules/movie/Movie';
import {PersonResolver} from '../modules/person/Person';
import {SongResolver} from '../modules/song/Song';
import {ChangePasswordResolver} from '../modules/user/ChangePassword';
import {ConfirmUserResolver} from '../modules/user/ConfirmUser';
import {FollowResolver} from '../modules/user/Follow';
import {ForgotPasswordResolver} from '../modules/user/ForgotPassword';
import {LoginResolver} from '../modules/user/Login';
import {LogoutResolver} from '../modules/user/Logout';
import {MeResolver} from '../modules/user/Me';
import {RegisterResolver} from '../modules/user/Register';
import {UserResolver} from '../modules/user/User';

export const createSchema = async () =>
	buildSchema({
		resolvers: [
			RegisterResolver,
			ConfirmUserResolver,
			ForgotPasswordResolver,
			ChangePasswordResolver,
			LoginResolver,
			UserResolver,
			LogoutResolver,
			MeResolver,
			FollowResolver,
			UserRelationsResolver,
			MovieResolver,
			PersonResolver,
			SongResolver,
			BookResolver,
			FileUploadResolver,
			BookRelationsResolver,
			SongRelationsResolver,
			PersonRelationsResolver,
			ActorInMovieRelationsResolver,
			MovieRelationsResolver,
		],
		authChecker,
	});
