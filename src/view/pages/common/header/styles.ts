/**
 * Header style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, breakpoints} : Theme) => ({
   headerTitle: {
      fontFamily: "'Monoton', Arial, sans-serif",
      fontSize: '46px',
      margin: spacing(0, 0, 2, 0),
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [breakpoints.down('sm')]: {
         lineHeight: '45px',
     },
      '& img': {
         width: '50px',
         marginRight: spacing(2),
         [breakpoints.down('sm')]: {
            display: 'none',
        },
      }
   },
}));
  
export default useStyles;
