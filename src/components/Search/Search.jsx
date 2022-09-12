import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles.js';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (

    <div className={classes.searchContainer}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            onKeyPress={handleKeyPress}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="standard"
            label="Search"
            id="input-with-sx"
          />
        </Box>
      </Box>
    </div>

  );
};

export default Search;
