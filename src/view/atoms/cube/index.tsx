/**
 * Cube component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type CubeProps = {
  cubeId: string;
};

const Cube = ({
  cubeId,
}: CubeProps) => {
  const classes = useStyles();
  const cubeAxis = cubeId.split('-');
  return (
    <Box className={classes.root} id={cubeId}>
      <Box component='span' className={classes.cubeAaxis}>({cubeAxis[0]}, {cubeAxis[1]})</Box>
    </Box> 
  );
};

export default Cube;
