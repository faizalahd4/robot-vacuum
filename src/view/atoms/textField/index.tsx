/**
 * Textfield component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 * 
 */
// GENERIC IMPORT
import {Controller, FieldError, Control} from 'react-hook-form';
import { TextField as MuiTextField } from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type TextFieldProps = {
    register: any;
    control: Control<any>;
    errors?: FieldError;
    id?: string;
    label: string;
    name: string;
    placeholder?: string;
    defaultValue?: string | number | null | boolean;
    multiline?: boolean;
    rows?: number;
    type?: 'text' | 'file' | 'number' | 'password'
}

// TEXTFIELD COMPONENT DECLARE
const TextField = ({
    id,
    name,
    placeholder,
    defaultValue,
    label,
    control,
    errors,
    register,
    type = 'text',
    multiline = false,
    rows = 1,
}: TextFieldProps) => {
    const classes = useStyles();

    return (
        <Controller
            control={control}
            name={name}
            render={(props) => (
                <MuiTextField 
                    {...register(name)}
                    error={Boolean(errors)}
                    id={id || name}
                    type={type}
                    classes={{root: classes.inputFieldContainer}}
                    defaultValue={defaultValue || null}
                    placeholder={placeholder}
                    fullWidth
                    multiline={multiline}
                    helperText={errors?.message || null}
                    rows={rows}
                    label={label} 
                    onChange={(e) => {
                        const {value} = e.target;
                        if (type === 'number') {
                            props.field.onChange(Number(value));
                        } else {
                            props.field.onChange(value);
                        }
                    }}
                    inputProps={{
                        min: 0,
                        max: 4,
                        autoComplete: 'off',
                        role: 'presentation',
                        classes: {
                           root: multiline ? classes.multilineRow : classes.textFieldRoot,
                           
                        }
                    }}
                />
            )}
        />
    )
}

export default TextField;