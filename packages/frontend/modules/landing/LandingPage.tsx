import { useMoviesQuery } from 'generated/graphql';
import React from 'react';
import { useVerifyLoggedIn } from '../auth/useVerifyLoggedIn';
import { Layout } from '../layouts/Layout';

export const LandingPage: React.FC = () => {
    useVerifyLoggedIn();
    const { data } = useMoviesQuery()

    return (
        <Layout>
            <div className="flex flex-wrap justify-center">
                {data?.movies?.map((movie, index) => {
                    return (
                        <div className="p-5">
                            {movie.title}
                            {movie.description}
                            <img src={movie.thumbnail} />
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
};

