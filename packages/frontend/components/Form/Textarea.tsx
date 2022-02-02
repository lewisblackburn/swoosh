import {Field} from 'formik';
import React from 'react';

interface TextareaProps {
	name: string;
	rows?: number;
	placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({name, rows = 3, placeholder}) => {
	return (
		<Field
			as="textarea"
			className="w-full mb-6 p-4 text-sm placeholder-blueGray-400 leading-none bg-blueGray-50 outline-none resize-none rounded"
			name={name}
			rows={rows}
			placeholder={placeholder}
		/>
	);
};
