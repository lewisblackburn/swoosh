import { Field } from 'formik';
import React from 'react';

interface InputFieldProps {
	name: string;
	type: string;
	placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({ name, type, placeholder }) => {
	return (
		<div className="my-5">
			<Field
				className="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
				id={name}
				name={name}
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
};

export default InputField;
