import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import moviesReducer from './slices/moviesSlice';
import starshipsReducer from './slices/starshipsSlice';
import planetsReducer from './slices/planetsSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    movies: moviesReducer,
    starships: starshipsReducer,
    planets: planetsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

