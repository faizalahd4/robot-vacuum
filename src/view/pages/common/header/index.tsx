/**
 * Header
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// IMAGE IMPORT
import DirectionImage from '../../../../assets/icons/direction.png';

// STYLE IMPORT
import './styles.css';

const Header = () => (
    <header className='header-title'>
        <img src={DirectionImage} alt='direction'/>Robot Vacuum   
    </header>
);

export default Header;
