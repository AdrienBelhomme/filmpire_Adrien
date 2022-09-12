import React, { useEffect } from 'react';
import { Divider, List, ListItemButton, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { NearMe } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres/index.js';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const redLogo = 'https://res.cloudinary.com/djl9nmkbs/image/upload/v1662404308/darling_gmylpj.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const SideBar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const theme = useTheme();
  const classes = useStyles();
  const { data, error, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
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
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'dark' ? blueLogo : redLogo}
          alt="filmpire logo"
        />
      </Link>

      <List>
        <ListSubheader className={classes.titleCategories}>Genres</ListSubheader>
        { isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={id} className={classes.links} to="/">
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon>
                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={name} sx={{ color: '#616161', fontFamily: 'Nunito !important' }} />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <List>
        <ListSubheader className={classes.titleCategories}>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} sx={{ color: '#616161', fontFamily: 'Nunito !important' }} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
};
export default SideBar;
