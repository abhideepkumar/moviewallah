'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Searchbar = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        console.log('handle search');
        if (query.startsWith('tt') === true) {
            router.push(`/movie/${query}`);
        } else {
            router.push(`/${query}`);
        }
    };
    return (
        <div>
            <div className="flex justify-center items-center p-5">
                <input
                    type="text"
                    placeholder="Search moviename or ID"
                    className="w-1/2 m-2 p-3 mr-0 rounded-l bg-slate-100 h-[50px]"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <button
                    className="bg-primary hover:bg-yellow-500 m-2 p-3 rounded-r ml-0 h-[50px]"
                    type="submit"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
