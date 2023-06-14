/**
 * Text field style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette} : Theme) => ({
    inputFieldContainer: {
        width: '100%',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: palette.secondary.light,
        '& .MuiInputBase-root': {
            fontSize: '13px',
        },
        '& .MuiInputLabel-root': {
            lineHeight: '10px',
            fontSize: '13px',
        },
        '& .MuiOutlinedInput-input': {
            padding: '10px 14px',
        }
    },
    textFieldRoot: {
        padding: spacing(1, 0),
        height: '40px',
    },
    multilineRow: {
        padding: spacing(1, 2),
        height: 'auto',
    },
}));
  
export default useStyles;