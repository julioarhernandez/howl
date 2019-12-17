import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        color: 'secondary'
    }
}));

export default useStyles;
