/**
 * Select field style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({breakpoints} : Theme) => ({
    root: {
        boxSizing: 'border-box',
        [breakpoints.down('sm')]: {
            width: '100%', 
        },
    },
}));
  
export default useStyles;

