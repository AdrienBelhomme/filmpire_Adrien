import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

const SideBar = ({ setMobileOpen }) => {
  const redLogo = 'https://res.cloudinary.com/djl9nmkbs/image/upload/v1662404308/darling_gmylpj.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'dark' ? blueLogo : redLogo}
          alt="filmpire logo"
        />

      </Link>
    </>
  );
};

export default SideBar;
