import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
    shrink: {
        flexShrink: 1,
        flexGrow: 0,
        whiteSpace: 'nowrap'
    },
    leftIcon: {
        minWidth: '45px'
    }
}));
export default useStyles;