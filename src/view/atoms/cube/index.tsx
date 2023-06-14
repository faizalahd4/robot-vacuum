/**
 * Cube component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// STYLE IMPORT
import './styles.css';

type CubeProps = {
  cubeId: string;
};

const Cube = ({
  cubeId,
}: CubeProps) => {
  const cubeAxis = cubeId.split('-');
  return (
    <Box className={'cube-root'} id={cubeId}>
      <Box component='span' className='cube-axis'>({cubeAxis[0]}, {cubeAxis[1]})</Box>
    </Box> 
  );
};

export default Cube;
