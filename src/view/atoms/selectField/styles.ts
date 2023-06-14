/**
 * Select field style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing} : Theme) => ({
    selectFieldContainer: {
        '& .MuiInputLabel-root': {
            lineHeight: '18px',
            fontSize: '14px',
            marginTop: spacing(-0.5),
        }
    },
    selectField: {
        width: '100%',
        borderRadius: '8px',
        textAlign: 'left',
        '& .MuiInputBase-root': {
            fontSize: '13px',
        }
    },
    selectFieldRoot: {
        padding: spacing(1, 0),
        height: '40px',
    },
    selectFieldOption: {
        display: 'block'
    }
}));
  
export default useStyles;

