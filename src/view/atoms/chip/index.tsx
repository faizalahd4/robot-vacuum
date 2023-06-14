/**
 * Chip component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {ChipProps, Chip as MuiChip} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const Chip = ({
  ...rest
}: ChipProps) => {
  const classes = useStyles();
  return (
    <MuiChip {...rest} className={classes.chipRoot}/>
  )
};

export default Chip;
