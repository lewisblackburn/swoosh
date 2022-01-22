import {Field} from 'formik';
import React from 'react';

interface InputFieldProps {
	name: string;
	type: string;
	placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({name, type, placeholder}) => (
	<Field
		className="w-full py-4 text-sm placeholder-blueGray-400 leading-none bg-blueGray-50 outline-none"
		id={name}
		name={name}
		placeholder={placeholder}
		type={type}
	/>
);

export default InputField;
