'use server';

// Function to fetch details of a specific movie by its ID
export const getMovieDetails = async (id) => {
    console.log('getMovieDetails', id);
    try {
        // Fetch movie details from OMDB API
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`);
        if (!res.ok) {
            return { error: `HTTP error! status: ${res.status}` };
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return { error: error.message };
    }
};

// Function to search for movies based on a search term
export const getMovies = async (search) => {
    console.log('getMovies', search);
    try {
        // Fetch movies from OMDB API based on search term
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${search}`);
        if (!res.ok) {
            return { error: `HTTP error! status: ${res.status}` };
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return { error: error.message };
    }
};
