import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { useGetActorQuery, useGetActorMoviesQuery } from '../../services/TMDB';
import ActorMoviesList from '../ActorMoviesList/ActorMoviesList';

const Actors = () => {
  const { id } = useParams();

  const { data } = useGetActorQuery(id);
  const { data: allMovies, isFetching } = useGetActorMoviesQuery(id);

  if (isFetching) {
    return (
      <Box>
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  const navigate = useHistory();

  console.log(data);

  return (
    <div>
      <Typography>
        Name: {data?.name}
      </Typography>
      <Typography>
        Age : {2022 - data?.birthday?.split('-')[0]}
      </Typography>
      <Typography>
        {data?.place_of_birth || 'Sorry, not indicated'}
      </Typography>
      <Typography>
        <Link target="_blank" rel="noreferrer" to={`//www.imdb.com/name/${data?.imdb_id}`}>
          IMDB
        </Link>

      </Typography>

      <img src={`https://www.themoviedb.org/t/p/w300/${data?.profile_path}`} />

      <button onClick={() => navigate.goBack()}>Go back</button>

      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          Other movies
        </Typography>
        {allMovies ? (
          <ActorMoviesList movies={allMovies.cast} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found.</Box>
        )}
      </Box>

    </div>
  );
};

export default Actors;
