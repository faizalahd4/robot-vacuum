/**
 * Home page style
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import { makeStyles } from '@mui/styles';
import { Theme } from "@mui/system";

const useStyles = makeStyles(({spacing, palette, breakpoints} : Theme) => ({
  root: {
    margin: spacing(0, 'auto'),
    textAlign: 'center',
    border: '1px solid',
    borderColor: palette.secondary.light,
    padding: spacing(3.5, 3.5),
    borderRadius: '5px',
    boxShadow: `1px 1px 4px ${palette.secondary.light}`,
    width: '850px',
    display: 'flex',
    boxSizing: 'border-box',
    [breakpoints.down('sm')]: {
      width: '95%',
      flexDirection: 'column',
      padding: spacing(0.5, 0),
    },
 },
 rightContainer: {
  width: 365,
  [breakpoints.down('sm')]: {
    margin: spacing(0, 'auto'),
  },
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
