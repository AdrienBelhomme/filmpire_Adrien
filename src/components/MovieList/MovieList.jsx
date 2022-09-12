import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  console.log(movies);

  return (
    <div>
      <Grid container className={classes.moviesContainer}>
        {movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>

    </div>
  );
};

export default MovieList;
