'use client';
import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '@/app/actions';
import Image from 'next/image';
import StarIcon from '@/public/icons/staricon';
import Skeleton from './skeletonForID';
import NoResultsIcon from '@/public/icons/NoResultsIcon';
import Back from '@/components/back';
const MovieDetails = ({ params }) => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Fetch movie details when component mounts or slug changes
        async function fetchMovieDetails() {
            const response = await getMovieDetails(params.slug);
            setLoading(false);
            setMovie(response);
            setError(response.Error);
        }
        fetchMovieDetails();
    }, [params.slug]);

    // Function to render genre tags
    const renderGenreTags = (genres) => {
        return genres?.split(', ').map((genre, index) => (
            <span key={index} className="px-3 py-1 mr-2 text-sm bg-gray-800 rounded-full">
                {genre}
            </span>
        ));
    };

    return (
        <div className="bg-zinc-900 text-white min-h-screen">
            <Back />
            {loading ? (
                <Skeleton />
            ) : error ? (
                // Display error message if movie not found
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                    <NoResultsIcon />
                    <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
                    <p className="text-gray-400">We couldn&apos;t find any movies matching your search.</p>
                    <button
                        onClick={() => window.history.back()}
                        className="mt-6 bg-primary hover:bg-yellow-500 text-white py-2 px-4 rounded"
                    >
                        Back to Previous Page
                    </button>
                    <p className="text-gray-400 mt-5">Possible reason: {error}</p>
                    <p className="text-gray-400 mt-2">Check if ID is correct or try another search</p>
                </div>
            ) : (
                // Display movie details
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-start m-4">
                        <div>
                            <h1 className="text-5xl font-bold">{movie.Title}</h1>
                            <div className="text-sm mt-2 text-gray-400">
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
                            style={{
                                backgroundImage: `url(${
                                    movie.Poster !== 'N/A' ? movie.Poster : '/images/no-img.jpeg'
                                })`,
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative h-full flex justify-center items-center">
                            <Image
                                src={movie.Poster !== 'N/A' ? movie.Poster : '/images/no-img.jpeg'}
                                alt="movie poster"
                                width={300}
                                height={450}
                                className="rounded-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-4">{renderGenreTags(movie.Genre)}</div>
                    <p className="text-gray-300 mb-4">{movie.Plot}</p>
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
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="mb-4">
                            <p className="text-gray-400">Awards</p>
                            <p>{movie.Awards}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Released</p>
                            <p>{movie.Released}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Language</p>
                            <p>{movie.Language}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Country</p>
                            <p>{movie.Country}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Box Office</p>
                            <p>{movie.BoxOffice}</p>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-green-600">▲ Metascore</p>
                            <p className="text-xl text-green-600">{movie.Metascore}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Production</p>
                            <p>{movie.Production !== 'N/A' ? movie.Production : 'Not available'}</p>
                        </div>
                    </div>

                    {movie.Website !== 'N/A' && (
                        <div className="mb-4">
                            <p className="text-gray-400">Website</p>
                            <a
                                href={movie.Website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                {movie.Website}
                            </a>
                        </div>
                    )}
                    <div className="mb-4">
                        <p className="text-gray-400 mb-2">Ratings Source</p>
                        {movie.Ratings.map((rating, index) => (
                            <p key={index}>
                                <span className="font-semibold">{rating.Source}:</span> {rating.Value}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
