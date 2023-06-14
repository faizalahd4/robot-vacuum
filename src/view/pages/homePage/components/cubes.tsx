/**
 * Cubes component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// ATOMS IMPORT
import {Cube} from '../../../atoms';

// UTILS IMPORT
import {CUBE_PER_ROW, CUBE_PER_COLUMN} from '../../../../utils/constants';

// HOME IMPORT
import Vacuum from './vacuum';

// STYLE IMPORT
import '../styles.css';

type CubesProps = {
    currentCubeId: string | null;
    rotate: number;
    cmdIndex: number;
}

const Cubes = ({
    currentCubeId,
    rotate,
    cmdIndex,
}: CubesProps) => {
    const elementsByRow = Array.from({ length: CUBE_PER_ROW }, (_, i) => i);
    const elementsByColumn = Array.from({ length: CUBE_PER_COLUMN }, (_, i) => i);
    return (
        <Box className='cubes-root' id='cubes-root'>
            {currentCubeId && <Vacuum currentCubeId={currentCubeId} rotate={rotate} cmdIndex={cmdIndex}/>}
            {elementsByRow.map((_, rowIndex) => (
                <Box key={`row-${rowIndex}`} className='row-box'>
                    {elementsByColumn.map((_, columnIndex) => (
                        <Cube key={`${rowIndex}-${columnIndex}`} cubeId={`${rowIndex}-${columnIndex}`}/>
                    ))}
                </Box>
            ))}  
        </Box>
    );
};

export default Cubes;
