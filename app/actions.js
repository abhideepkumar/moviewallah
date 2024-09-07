'use server';
export const getMovieDetails = async (id) => {
    console.log('getMovieDetails', id);
    try {
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

export const getMovies = async (search) => {
    console.log('getMovies', search);
    try {
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
