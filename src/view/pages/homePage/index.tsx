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
import useStyles from './styles';

const HomePage = () => {
    const classes = useStyles();
    const [formState, setFormState] = useState<CubeFormType>(cubeFormDefaultValue);
    const [currentCubeId, setCurrentCubeId] = useState<string | null>(null);
    const [rotate, setRotate] = useState<number>(0);
    const [cmdIndex, setCmdIndex] = useState<number>(0);
    return (
        <Box className={classes.root} display='flex' gap={5}>
            <Box flex={1}>  
                <CubeForm data={formState} 
                    setData={setFormState} 
                    setCurrentCubeId={setCurrentCubeId}  
                    setRotate={setRotate}
                    setCmdIndex={setCmdIndex}/>
            </Box>
            <Box width={365}>  
                <Cubes currentCubeId={currentCubeId} rotate={rotate} cmdIndex={cmdIndex}/>
            </Box>
        </Box>
    );
};

export default HomePage;
