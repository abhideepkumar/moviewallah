'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getMovies } from '@/app/actions';
import NoResultsIcon from '@/public/icons/NoResultsIcon';
import Back from '@/components/back';

const Allmovies = ({ params }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchMovies() {
            const response = await getMovies(params.slugs);
            setError(response.Error);
            console.log("error",response.Error)
            setMovies(response.Search || []);
            setLoading(false);
        }
        fetchMovies();
    }, [params.slugs]);

    return (
        <div className="bg-zinc-900 text-white min-h-screen p-5">
            <Back/>
            <div className="container mx-auto">
                {/* Title displaying the search term */}
                <h1 className="text-xl font-semibold mb-6 ">Movie Results for<span className='text-primary'> {params.slugs}</span></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading ? (
                        // Loading skeleton
                        <div className="animate-pulse">
                            <div className="w-[200px] h-[300px] bg-gray-300 rounded-md mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    ) : movies.length > 0 ? (
                        // Map through movies and display each one
                        movies.map((movie) => (
                            <div key={movie.imdbID} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
                                <div className="w-full h-[400px] relative">
                                    <Image
                                        src={movie.Poster !== 'N/A' ? movie.Poster : '/images/no-img.jpeg'}
                                        alt={movie.Title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2 truncate">{movie.Title}</h2>
                                    <p className="text-gray-400 mb-4">Year: {movie.Year || 'N/A'}</p>
                                    <button
                                        className="w-full bg-primary hover:bg-yellow-500 text-white py-2 px-4 rounded transition duration-300"
                                        onClick={() => router.push(`/movie/${movie.imdbID}`)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        // No results found
                        <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                            <NoResultsIcon />
                            <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
                            <p className="text-gray-400">We couldn&apos;t find any movies matching your search.</p>
                            <button
                                onClick={() => router.push('/')}
                                className="mt-6 bg-primary hover:bg-yellow-500 text-white py-2 px-4 rounded"
                            >
                                Back to Home
                            </button>
                            {/* Display error message if any */}
                            <p className="text-gray-400 mt-5">Possible reason: {error}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Allmovies;
