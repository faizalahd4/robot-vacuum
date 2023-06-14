/**
 * Command field component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {FieldErrors} from 'react-hook-form';
import {Box, Button, Grid, FormHelperText} from '@mui/material';
import {KeyboardArrowRight, KeyboardArrowLeft, DragIndicator} from '@mui/icons-material';

// HOME IMPORT
import { Chip } from "../../../../atoms";
import {CubeFormType} from '../../../../../models/cubeForm';

// UTILS IMPORT
import {DirectionCmd} from '../../../../../utils/enum';

// STYLE IMPORT
import '../../styles.css';

type CmdFieldProps = {
    data: CubeFormType;
    errors: FieldErrors<CubeFormType>;
    addCmd: (val: DirectionCmd) =>  void;
    deleteCmd: (index: number) =>  void;
}

const CmdField = ({
    data,
    errors,
    addCmd,
    deleteCmd,
}: CmdFieldProps) => {

    return (
        <Grid container spacing={1} mt={1} flex={1}>
            <Grid item xs={12}>
                <Box display='flex' gap={1}>
                    <Button variant="outlined" size="small" endIcon={<DragIndicator/>} onClick={() => addCmd(DirectionCmd.move)}>Move</Button>
                    <Button variant="outlined" size="small" endIcon={<KeyboardArrowLeft/>}  onClick={() => addCmd(DirectionCmd.left)}>Left</Button>
                    <Button variant="outlined" size="small" endIcon={<KeyboardArrowRight/>}  onClick={() => addCmd(DirectionCmd.right)}>Right</Button>
                </Box>
                <FormHelperText error>{errors?.cmd && errors.cmd.message}</FormHelperText>
                <Box className='cmdConatiner'>
                    {data.cmd?.map((item, index) => (<Chip onDelete={() => deleteCmd(index)} label={item} size="small" key={index} />))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default CmdField;
