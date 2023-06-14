/**
 * Cube form component
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {SetStateAction, Dispatch, useState} from 'react';
import {Box, Grid} from '@mui/material';

// CUBE FORM IMPORT
import { TextField, Alert, Button } from "../../../atoms";
import {CubeFormType, CubeReportType, cubeReportDefaultValue} from '../../../../models/cubeForm';
import useCubeForm from '../useCubeForm';
import FacingDirectionField from './formFields/facingDirectionField';
import CmdField from './formFields/cmdField';

// UTILS IMPORT
import {facingDirectionMap, facingDirectionDegreeMap} from '../../../../utils/choices';

// STYLE IMPORT
import useStyles from '../styles';

type CubeFormProps = {
    data: CubeFormType;
    setData: Dispatch<SetStateAction<CubeFormType>>;
    setCurrentCubeId: Dispatch<SetStateAction<string | null>>;
    setRotate: Dispatch<SetStateAction<number>>;
    setCmdIndex: Dispatch<SetStateAction<number>>;
}

const CubeForm = ({
    data,
    setData,
    setCurrentCubeId,
    setRotate,
    setCmdIndex,
}: CubeFormProps) => {
    const classes = useStyles();
    const [report, setReport] = useState<CubeReportType>(cubeReportDefaultValue);
    const {
        control,
        register,
        handleSubmit,
        errors,
        watch,
        resetHandler,
        addCmd,
        deleteCmd,
        updateDirection,
    } = useCubeForm(
        data,
        setData,
        setCurrentCubeId,
        setReport,
        setRotate,
        setCmdIndex,
    );

    const onSubmit = (formData: CubeFormType) => {
        setData(formData);
        setReport({
            facingDirection: formData.facingDirection,
            xPoint: Number(formData.xPoint).toString(),
            yPoint: Number(formData.yPoint).toString(),
        });
        setRotate(facingDirectionDegreeMap[formData.facingDirection]);
        setCurrentCubeId(`${formData.xPoint}-${formData.yPoint}`);
        updateDirection(formData);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formLayout}>
            <input type="hidden" id="cmd" {...register("cmd" as const)} value={watch("cmd")} />
            <Box display='flex' flexDirection='column' height="100%">
                <Box mb={2.5}>
                    <Alert severity="success" className='alert' isShow={Boolean(report?.facingDirection)} content={`Report: ${report.xPoint}, ${report.yPoint}, ${facingDirectionMap[report.facingDirection]}`}/>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                            register={register}
                            id="xPoint"
                            name="xPoint"
                            control={control}
                            placeholder="X Point"
                            errors={errors?.xPoint}
                            type='number'
                            label="X Point"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            register={register}
                            id="yPoint"
                            name="yPoint"
                            control={control}
                            placeholder="Y Point"
                            errors={errors?.yPoint}
                            type='number'
                            label="Y Point"
                        />
                    </Grid>
                </Grid>
                <FacingDirectionField {...{register, errors, control, watch}}/>
                <CmdField {...{data, errors, addCmd, deleteCmd}}/>
                <Grid container spacing={1} mt={1}>
                    <Grid item xs={12} display='inline-flex' justifyContent='flex-end' gap={1}>
                        <Button variant="contained" type="submit" label='Report'/>
                        <Button variant="outlined" onClick={resetHandler} label='Cancel'/>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};

export default CubeForm;
