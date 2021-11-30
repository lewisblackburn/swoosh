import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";

export const useVerifyLoggedIn = () => {
    const { data, loading } = useMeQuery();
    const router = useRouter();

    useEffect(() => {
        // if not logged in push to login
        if (!loading && !data?.me) router.push("/login");
    }, [loading, data, router]);
};
