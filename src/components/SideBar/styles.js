import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: theme.palette.mode === 'dark' ? '100%' : '70%',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  titleCategories: {
    fontFamily: 'Nunito !important',
    fontWeight: '600 !important',
    lineHeight: '30px !important',
    color: '#bdbdbd !important',
    textTransform: 'uppercase !important',
    fontSize: '0.73rem !important',

  },

}));
