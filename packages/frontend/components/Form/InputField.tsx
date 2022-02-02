import {Field} from 'formik';
import React from 'react';

interface InputFieldProps {
	name: string;
	type: string;
	min?: number;
	max?: number;
}

export const InputField: React.FC<InputFieldProps> = ({name, type, min, max}) => (
	<Field
		className="w-full mb-4 p-4 text-sm placeholder-blueGray-400 leading-none bg-blueGray-50 outline-none rounded"
		id={name}
		name={name}
		placeholder={name}
		type={type}
		min={min}
		max={max}
	/>
);

export default InputField;
