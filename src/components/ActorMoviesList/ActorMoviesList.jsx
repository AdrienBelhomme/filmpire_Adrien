import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles();

  console.log(movies);

  return (
    <div>
      <Grid container className={classes.moviesContainer}>
        {movies.slice(0, numberOfMovies).map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>

    </div>
  );
};

export default MovieList;
