import React from "react";

interface LayoutProps { }

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-screen h-screen">{children}</div>
    );
};
