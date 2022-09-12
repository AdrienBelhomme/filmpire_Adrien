import { configureStore } from '@reduxjs/toolkit';
import genreOrCategorygoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';
import { tmdbApi } from '../services/TMDB';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategorygoryReducer,
    user: userReducer,
  },
});

