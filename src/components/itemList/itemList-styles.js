import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
    shrink: {
        flexShrink: 0,
    }
}));
export default useStyles;