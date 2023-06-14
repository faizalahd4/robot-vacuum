/**
 * Facing Direction field
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {Grid} from '@mui/material';
import {UseFormReturn, FieldErrors} from 'react-hook-form';

// HOME IMPORT
import {  SelectField } from "../../../../atoms";

// UTILS IMPORT
import {facingDirectionChoice} from '../../../../../utils/choices';
import {CubeFormType} from '../../../../../models/cubeForm';

type FacingDirectionFieldProps = {
    control: UseFormReturn<CubeFormType>['control'];
    errors?: FieldErrors<CubeFormType>;
    register: UseFormReturn<CubeFormType>['register'];
    watch: UseFormReturn<CubeFormType>['watch'];
  };

const FacingDirectionField = ({
    control,
    errors,
    register,
    watch,
}: FacingDirectionFieldProps) => {

    return (
        <Grid container spacing={1} mt={1}>
            <Grid item xs={12}>
                <SelectField
                    register={register}
                    id="facingDirection"
                    name="facingDirection"
                    control={control}
                    placeholder="Select Facing direction"
                    errors={errors?.facingDirection}
                    options={facingDirectionChoice}
                    label='Facing direction'
                    defaultValue={watch("facingDirection")}
                />
            </Grid>
        </Grid>
    );
};

export default FacingDirectionField;
