/**
 * Chip component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import {ChipProps, Chip as MuiChip} from '@mui/material';
import './styles.css';

const Chip = ({
  ...rest
}: ChipProps) => (
  <MuiChip {...rest} />
);

export default Chip;
