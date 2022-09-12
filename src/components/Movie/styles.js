import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
    textAlign: 'center',
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '0',
    textAlign: 'center',
  },
  ratings: {
    justifyContent: 'center',
    width: '100%',
  },
  links: {
    textDecoration: 'none',
    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.down('xs')]: {
      dislay: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {
    borderRadius: '20px',
    height: '300px',
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

}));
