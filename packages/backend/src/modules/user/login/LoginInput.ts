import {IsEmail} from 'class-validator';
import {Field, InputType} from 'type-graphql';
import {PasswordMixin} from '../../shared/PasswordMixin';

@InputType()
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class LoginInput extends PasswordMixin(class {}) {
	@Field()
	@IsEmail()
	email!: string;
}
