/**
 * Header style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing} : Theme) => ({
   headerTitle: {
      fontFamily: "'Monoton', Arial, sans-serif",
      fontSize: '46px',
      margin: spacing(0, 0, 2, 0),
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
         width: '50px',
         marginRight: spacing(2),
      }
   },
}));
  
export default useStyles;
