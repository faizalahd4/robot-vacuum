/**
 * Home page
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';

// MODEL IMPORT
import {CubeFormType, cubeFormDefaultValue} from '../../../models/cubeForm';

// HOME IMPORT
import CubeForm from './components/cubeForm';
import Cubes from './components/cubes';

// STYLE IMPORT
import './styles.css';

const HomePage = () => {
    const [formState, setFormState] = useState<CubeFormType>(cubeFormDefaultValue);
    const [currentCubeId, setCurrentCubeId] = useState<string>(`${formState.xPoint}-${formState.yPoint}`);
    return (
        <Box className='root' display='flex'>
            <Box flex={1}>  
                <CubeForm data={formState} setData={setFormState} setCurrentCubeId={setCurrentCubeId}/>
            </Box>
            <Box flex={1}>  
                <Cubes currentCubeId={currentCubeId}/>
            </Box>
        </Box>
    );
};

export default HomePage;
