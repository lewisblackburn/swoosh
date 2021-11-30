import { RegisterForm } from "frontend/components/Form/RegisterForm";
import React from "react";
import { useNotVerifyLoggedIn } from "../auth/useVerifyNotLoggedIn";
import { Layout } from "../layouts/Layout";

interface RegisterPageProps { }

export const RegisterPage: React.FC<RegisterPageProps> = ({ }) => {
    useNotVerifyLoggedIn();

    return (
        <Layout>
            <RegisterForm />
        </Layout>
    );
};
