/**
 * 
 * Select field component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 * 
 */
// GENERIC IMPORT
import {Controller, FieldError, Control} from 'react-hook-form';
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

type OptionType = {
    label: string;
    value: number;
}

type SelectFieldProps = {
    register: any,
    control: Control<any>;
    errors?: FieldError;
    id?: string;
    name: string;
    label: string;
    placeholder?: string;
    defaultValue?: string | number | null | boolean;
    options: OptionType[];
}

// SELECT FIELD COMPONENT DECLARE
const SelectField = ({
    id,
    name,
    placeholder,
    defaultValue,
    control,
    errors,
    register,
    label,
    options,
}: SelectFieldProps) => {
    const classes = useStyles();

    return (
        <Controller
            control={control}
            name={name}
            render={(props) => (
                <FormControl className={classes.selectFieldContainer} error={Boolean(errors)} sx={{ width: '100%' }}>
                    <InputLabel id={`${id || name}-label`}>{label}</InputLabel>
                    <Select
                        {...register(name)}
                        labelId={`${id || name}-label`}
                        id={id || name}
                        variant="outlined"
                        placeholder={placeholder}
                        className={classes.selectField}
                        size="small"
                        label={label}
                        value={defaultValue || ''}
                        helpertext={errors?.message || ''}
                        error={Boolean(errors)}
                        defaultValue={defaultValue || ''}
                        fullWidth
                        onChange={(e) => {
                            const {value} = e.target;
                            props.field.onChange(value);
                        }}
                        inputprops={{
                            autoComplete: 'off',
                            role: 'presentation',
                            classes: {
                                root: classes.selectFieldRoot,
                            }
                        }}
                        displayEmpty
                    >
                        {options.map((option: OptionType) => (
                            <MenuItem value={option.value} className={classes.selectFieldOption} key={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                <FormHelperText>{errors?.message}</FormHelperText>
                </FormControl>
            )}
        /> 
    )
}

export default SelectField;