/**
 * Vacuum component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';

// IMAGE IMPORT
import VacuumImage from '../../../../assets/icons/vacuum.png';

// STYLE IMPORT
import '../styles.css';

type VacuumProps = {
    currentCubeId: string;
    rotate: number;
    cmdIndex: number;
}

const Vacuum = ({
    currentCubeId,
    rotate,
    cmdIndex,
}: VacuumProps) => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [rotation, setRotation] = useState(0);
    const selectedCubeContainer = document.getElementById('cubes-root');

    useEffect(() => {
        const selectedCube = document.getElementById(currentCubeId);
        if (selectedCube && selectedCubeContainer) {
            const top = selectedCube.getBoundingClientRect().top - selectedCubeContainer.getBoundingClientRect().top + 10;
            const left = selectedCube.getBoundingClientRect().left - selectedCubeContainer.getBoundingClientRect().left + 10;
            setPosition({x: top, y: left});
        }
    }, [currentCubeId]);


    useEffect(() => {
        if (rotate) {
            setRotation(rotate);
        }
    }, [cmdIndex, rotate]);

    return (
        <img src={VacuumImage} 
            alt='Robot Vacuum' 
            className='vacuum-icon' 
            width={50}
            style={{
                top: `${position.x}px`,
                left: `${position.y}px`,
                transform: `rotate(${rotation}deg)`,
                transition: 'all 2s ease',
            }}/>
    );
};

export default Vacuum;
