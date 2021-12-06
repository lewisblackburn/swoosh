import React from 'react';
import { Navigation } from '../../components/Navigation';

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="p-5 bg-primary text-typography transition-all transform">
            <div>
                <Navigation />
                {children}
            </div>
        </div>
    );
};
