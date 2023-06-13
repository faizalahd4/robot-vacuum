/**
 * Header
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import DirectionImage from '../../../../assets/icons/direction.png';
import './styles.css';

const Header = () => (
    <header className='header-title'>Robot Vacuum<img src={DirectionImage} alt='direction'/></header>
);

export default Header;
