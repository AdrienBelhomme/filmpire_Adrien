import React from 'react';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';
import { Typography, Button, Box, Avatar } from '@mui/material';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);
  const test = useSelector((state) => state.auth);

  const onlyUpperChar = user.username.match(/[A-Z]/g);
  const separation = onlyUpperChar[1];

  const userName = user.username.split(`${separation}`);
  const firstName = userName[0];
  const lastName = separation + userName[1];

  const { hash } = user.avatar.gravatar;

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Avatar src={`https://www.gravatar.com/avatar/${hash}`} alt="profil picture" sx={{ width: 90, height: 90 }} />
          <Typography variant="h4" gutterBottom>{`Profile - ${firstName} ${lastName}`}</Typography>
        </Box>
        <Box>
          <Button color="inherit" onClick={logout}>
            Logout &nbsp; <ExitToApp />
          </Button>
        </Box>
      </Box>
      {!favoriteMovies.length
        ? <Typography variant="h5">Add favorites or watchlsit movies to see them here.</Typography>
        : (
          <Box>
            Favorites movies
          </Box>
        )}
    </Box>

  );
};

export default Profile;
