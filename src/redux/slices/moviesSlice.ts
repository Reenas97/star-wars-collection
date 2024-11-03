import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../services/movies";

interface MoviesState {
    movies: Movie[];
    loading: boolean;
}

const initialState: MoviesState = {
    movies:  [],
    loading: false
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setMovies: (state, action) => {
        state.movies = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
    },
})

export const { setMovies, setLoading } = moviesSlice.actions;
export default moviesSlice.reducer;