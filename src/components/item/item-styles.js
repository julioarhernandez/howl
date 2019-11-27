import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
    shrink: {
        flexShrink: 1,
        flexGrow: 0,
        whiteSpace: 'nowrap'
    }
}));
export default useStyles;