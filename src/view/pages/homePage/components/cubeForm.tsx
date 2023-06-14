/**
 * Home page
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {SetStateAction, Dispatch, useState} from 'react';
import { useForm } from "react-hook-form";
import {Box, Button, Grid, Alert, FormHelperText} from '@mui/material';
import {KeyboardArrowRight, KeyboardArrowLeft, DragIndicator} from '@mui/icons-material';

// HOME IMPORT
import { Chip, TextField, SelectField } from "../../../atoms";
import {CubeFormType, CubeReportType, cubeFormDefaultValue} from '../../../../models/cubeForm';
import schema from '../schema';

// UTILS IMPORT
import {FacingDirection, DirectionCmd} from '../../../../utils/enum';
import {facingDirectionMap, cmdFacingDirectionMap, facingDirectionChoice, rotateDegreeMap, facingDirectionDegreeMap} from '../../../../utils/choices';

// STYLE IMPORT
import '../styles.css';

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
    const [report, setReport] = useState<CubeReportType>({
        xPoint: '', 
        yPoint: '',
        facingDirection: '',
    });
    const {control, register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<CubeFormType>({
        defaultValues: {
            xPoint: '',
            yPoint: '',
            facingDirection: '',
            cmd: [],
        },
        mode: 'all',
        resolver: yupResolver(schema),
    });

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

    const addCmd = (currentCmd: DirectionCmd) => {
        const updatedCmd = [...data.cmd, currentCmd];
        setData({...data, cmd: updatedCmd});
        setValue('cmd', updatedCmd);
    }

    const deleteCmd = (cmdIndex: number) => {
        const updatedCmd = data.cmd.filter((_, index) => cmdIndex !== index);
        setData({...data, cmd: updatedCmd});
        setValue('cmd', updatedCmd);
    }

    const updateDirection = (formData: CubeFormType) => {
        let reportDirection = formData.facingDirection;
        let reportXPoint = Number(formData.xPoint);
        let reportYPoint = Number(formData.yPoint);
        
        formData.cmd.forEach((item, index) => {
            setTimeout(() => {
                if (item === DirectionCmd.move) {
                    switch (reportDirection) {
                        case FacingDirection.west.toString():
                            reportYPoint -= 1;
                            break;
                        case FacingDirection.east.toString():
                            reportYPoint += 1;
                            break;
                        case FacingDirection.north.toString():
                            reportXPoint -= 1;
                            break;
                        case FacingDirection.south.toString():
                            reportXPoint += 1;
                            break;
                    }
                } else {
                    reportDirection = cmdFacingDirectionMap[reportDirection][item].toString();
                    setRotate(prevRotate =>  prevRotate + rotateDegreeMap[item]);
                }
                setReport({
                    facingDirection: reportDirection,
                    xPoint: reportXPoint.toString(),
                    yPoint: reportYPoint.toString(),
                });
                setCurrentCubeId(`${reportXPoint}-${reportYPoint}`);
                setCmdIndex(index);
            }, (index + 1) * 2000);
        });
        
    }

    const resetHandler = () => {
        reset({...cubeFormDefaultValue, facingDirection: ''});
        setData({...cubeFormDefaultValue, facingDirection: ''});
        setReport({xPoint: '',  yPoint: '', facingDirection: ''});
        setCurrentCubeId('0-0');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-layout'>
            <input type="hidden" id="cmd" {...register("cmd" as const)} value={watch("cmd")} />
            <Box display='flex' flexDirection='column' height="100%">
                {report?.facingDirection && 
                    <Alert severity="success" className='alert'>
                        Report: {report.xPoint}, {report.yPoint}, {facingDirectionMap[report.facingDirection]}
                    </Alert>
                }
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
                <Grid container spacing={1} mt={1} flex={1}>
                    <Grid item xs={12}>
                        <Box display='flex' gap={1}>
                            <Button variant="outlined" size="small" endIcon={<DragIndicator/>} onClick={() => addCmd(DirectionCmd.move)}>Move</Button>
                            <Button variant="outlined" size="small" endIcon={<KeyboardArrowLeft/>}  onClick={() => addCmd(DirectionCmd.left)}>Left</Button>
                            <Button variant="outlined" size="small" endIcon={<KeyboardArrowRight/>}  onClick={() => addCmd(DirectionCmd.right)}>Right</Button>
                        </Box>
                        <FormHelperText error>{errors?.cmd && errors.cmd.message}</FormHelperText>
                        <Box display='flex' mt={1} gap={1}>
                            {data.cmd?.map((item, index) => (<Chip onDelete={() => deleteCmd(index)} label={item} size="small" key={index} />))}
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={1}>
                    <Grid item xs={12} display='inline-flex' justifyContent='flex-end' gap={1}>
                        <Button variant="contained" type="submit">Report</Button>
                        <Button variant="outlined" onClick={resetHandler}>Cancel</Button>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};

export default CubeForm;
