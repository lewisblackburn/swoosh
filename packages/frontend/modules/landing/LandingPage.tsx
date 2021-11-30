import React from "react";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";
import { Layout } from "../layouts/Layout";

interface LandingPageProps { }

export const LandingPage: React.FC<LandingPageProps> = ({ }) => {
    useVerifyLoggedIn();

    return (
        <Layout>
            test
        </Layout>
    )

};

