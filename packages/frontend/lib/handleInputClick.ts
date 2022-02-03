/**
 * HandleInputClick
 * @param ref The inptut ref
 */
const handleInputClick = (ref: React.MutableRefObject<HTMLInputElement | null>): void => {
	if (ref.current) ref.current.click();
};

export default handleInputClick;
