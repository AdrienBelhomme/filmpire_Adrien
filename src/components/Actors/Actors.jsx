import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { useGetActorQuery, useGetActorMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

const Actors = () => {
  const { id } = useParams();

  const { data } = useGetActorQuery(id);
  const { data: allMovies } = useGetActorMoviesQuery(id);

  const navigate = useHistory();

  console.log(allMovies);

  return (
    <div>
      <Typography>
        Name: {data?.name}
      </Typography>
      <Typography>
        Age : {2022 - data?.birthday?.split('-')[0]}
      </Typography>
      <Typography>
        {data?.place_of_birth}
      </Typography>

      <img src={`https://www.themoviedb.org/t/p/w300/${data?.profile_path}`} />

      <button onClick={() => navigate.goBack()}>Go back</button>

      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          You might also like
        </Typography>
        {allMovies ? (
          <MovieList movies={allMovies.cast} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )}
      </Box>

    </div>
  );
};

export default Actors;
