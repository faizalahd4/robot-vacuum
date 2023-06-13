/**
 * Cube component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {Box} from '@mui/material';

// STYLE IMPORT
import './styles.css';

type CubeProps = {
  cubeId: string;
  currentCubeId?: string | null;
};

const Cube = ({
  cubeId,
  currentCubeId,
}: CubeProps) => {
  const cubeAxis = cubeId.split('-');
  return (
    <Box className={clsx('cube-root', cubeId === currentCubeId && 'active-cube')} id={cubeId}>
      <Box component='span' className='cube-axis'>({cubeAxis[0]}, {cubeAxis[1]})</Box>
    </Box> 
  );
};

export default Cube;
