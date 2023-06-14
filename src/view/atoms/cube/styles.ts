/**
 * Cube style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({palette}: Theme) => ({
  root: {
    display: 'inline-block',
    width: '70px',
    height: '70px',
    background: '#ecf0f1',
    border: '1px solid',
    borderColor: palette.secondary.dark,
    borderRadius: '2px',
    margin: '0.5px',
    animation: 'all 0.5 linear',
    position: 'relative',
    '&:hover': {
      backgroundColor: palette.background.default,
      borderColor: palette.background.default,
      cursor: 'pointer',
    },
  },
  cubeAaxis: {
    position: 'absolute',
    bottom: '2px',
    right: '2px',
    color: palette.text.primary,
    fontSize: '9px',
  }
}));
  
export default useStyles;
