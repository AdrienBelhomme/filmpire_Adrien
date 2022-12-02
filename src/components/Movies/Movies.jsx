import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';
import { genreOrCategory, selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
  const [page, setpage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movie matching this name.
          <br />
          Try another name.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography>
        unknow error has occured
      </Typography>
    );
  }

  return (
    <div>

      <div>
        <MovieList movies={data} />
        <Pagination />
      </div>
    </div>
  );
};

export default Movies;
