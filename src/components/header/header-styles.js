import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    titleCenter: {
        flexGrow: 1,
        textAlign: 'center',
    },
    titleLeft: {
        flexGrow: 1,
        textAlign: 'left',
    },

}));
export default useStyles;