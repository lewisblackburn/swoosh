import {registerEnumType} from 'type-graphql';

export enum UploadType {
	Movie = 'movie',
	Show = 'show',
	Person = 'person',
	Book = 'book',
	Song = 'song',
}

registerEnumType(UploadType, {
	name: 'UploadType',
	description: 'The type of thumbnail upload',
});
