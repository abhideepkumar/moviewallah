'use server';
export const getMovieDetails = async (id) => {
    console.log('getMovieDetails', id);
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`);
    const data = await res.json();
    console.log(data);
    return data;
};

export const getMovies = async (search) => {
    console.log('getMovies', search);
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${search}`);
    const data = await res.json();
    console.log(data);
    return data;
};
