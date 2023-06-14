/**
 * Chip style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  chipRoot: {
    '& .MuiChip-label': {
      fontSize: '11px',
      color: '#7f8c8d',
    }
  },
}));
  
export default useStyles;
