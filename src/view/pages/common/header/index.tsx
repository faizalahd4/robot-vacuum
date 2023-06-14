/**
 * Header
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// IMAGE IMPORT
import DirectionImage from '../../../../assets/icons/direction.png';

// STYLE IMPORT
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.headerTitle}>
            <img src={DirectionImage} alt='direction'/>Robot Vacuum   
        </header>
    )
};

export default Header;
