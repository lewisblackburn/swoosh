import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
} from "react";
import { IconType } from "react-icons/lib";
import { Spinner } from "./Spinner";

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    loading?: boolean;
    icon?: IconType;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    disabled,
    loading,
    icon,
    className = "",
    ...props
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={`inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base ${className}`}
            {...props}
        >
            {loading ? (
                <Spinner />
            ) : (
                <span className="flex items-center space-x-1">
                    {children}
                    {icon && <span>{icon({})}</span>}
                </span>
            )}
        </button>
    );
};
