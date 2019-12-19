import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
        },
        '& button': {
          display: 'flex',
          margin: 8
        },

      },
}));
export default createStyles;