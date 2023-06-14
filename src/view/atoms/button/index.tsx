/**
 * 
 * Button component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 * 
 */
// GENERIC IMPORT
import { Button as MuiButton, ButtonProps} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type MuiButtonProps = {
    label: string;
} & ButtonProps;

// SELECT FIELD COMPONENT DECLARE
const Button = ({
    label,
    ...rest
}: MuiButtonProps) => {
    const classes = useStyles();

    return (
        <MuiButton {...rest} className={classes.root} role='button'>{label}</MuiButton>
    )
}

export default Button;