'use client';
import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '@/app/actions';
import Image from 'next/image';
import StarIcon from '@/public/images/icons/staricon';
import Skeleton from './skeletonForID';

const MovieDetails = ({ params }) => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await getMovieDetails(params.slug);
            setLoading(false);
            setMovie(response);
        }
        fetchMovieDetails();
    }, [params.slug]);

    const renderGenreTags = (genres) => {
        return genres.split(', ').map((genre, index) => (
            <span key={index} className="px-3 py-1 mr-2 text-sm bg-gray-800 rounded-full">
                {genre}
            </span>
        ));
    };

    return (
        <div className="bg-zinc-900 text-white min-h-screen">
            {loading ? (
                <Skeleton />
            ) : (
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-start m-4">
                        <div>
                            <h1 className="text-5xl font-bold">{movie.Title}</h1>
                            <div className="text-sm text-gray-400">
                                <span>{movie.Year}</span>
                                <span className="mx-2">•</span>
                                <span>{movie.Rated}</span>
                                <span className="mx-2">•</span>
                                <span>{movie.Runtime}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-8">
                                <div className="text-sm text-gray-400">IMDb RATING</div>
                                <div className="flex items-center">
                                    <StarIcon className="w-6 h-6 text-yellow-400 mr-2" />
                                    <span className="text-2xl font-bold">{movie.imdbRating}</span>
                                    <span className="text-gray-400">/10</span>
                                </div>
                                <div className="text-sm text-gray-400">{movie.imdbVotes}</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-4 h-[450px] overflow-hidden rounded">
                        <div
                            className="absolute inset-0 bg-cover bg-center filter blur-md scale-110"
                            style={{ backgroundImage: `url(${movie.Poster})` }}
                        ></div>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative h-full flex justify-center items-center">
                            <Image
                                src={movie.Poster}
                                alt="movie poster"
                                width={300}
                                height={450}
                                className="rounded-sm"
                            />
                        </div>
                    </div>

                    {/* Genre tags */}
                    <div className="mb-4">{renderGenreTags(movie.Genre)}</div>

                    {/* Plot */}
                    <p className="text-gray-300 mb-4">{movie.Plot}</p>

                    {/* Director, Writer, Stars */}
                    <div className="mb-4">
                        <p className="mb-2">
                            <span className="text-gray-400 mr-2">Director</span>
                            <span className="text-blue-400">{movie.Director}</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-gray-400 mr-2">Writer</span>
                            <span className="text-blue-400">{movie.Writer}</span>
                        </p>
                        <p className="mb-2">
                            <span className="text-gray-400 mr-2">Stars</span>
                            <span className="text-blue-400">{movie.Actors}</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
