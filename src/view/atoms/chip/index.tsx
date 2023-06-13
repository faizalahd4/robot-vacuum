/**
 * Chip component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {ChipProps, Chip as MuiChip} from '@mui/material';

// STYLE IMPORT
import './styles.css';

const Chip = ({
  ...rest
}: ChipProps) => (
  <MuiChip {...rest} />
);

export default Chip;
