/**
 * Home page style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette} : Theme) => ({
  root: {
    width: '850px',
    margin: spacing(0, 'auto'),
    textAlign: 'center',
    border: '1px solid',
    borderColor: palette.secondary.light,
    padding: spacing(3.5, 3.5),
    borderRadius: '5px',
    boxShadow: `1px 1px 4px ${palette.secondary.light}`,
 },
  cubesRoot: {
    position: 'relative',
  },
  rowBox: {
    height: '73px',
  },
  formLayout: {
    height: '100%',
  },
  vacuumIcon: {
    position: 'absolute',
    zIndex: 1
  },
  cmdConatiner: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: spacing(2),
    gap: spacing(1), 
  }
}));
  
export default useStyles;
