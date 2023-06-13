/**
 * Home page
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import {SetStateAction, Dispatch, useState} from 'react';
import { useForm } from "react-hook-form";
import { Chip } from "../../../atoms";
import {Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Alert} from '@mui/material';
import {CubeFormType, CubeReportType, cubeFormDefaultValue} from '../../../../models/cubeForm';
import {FacingDirection, DirectionCmd} from '../../../../utils/enum';
import {facingDirectionMap, cmdFacingDirectionMap} from '../../../../utils/choices';
import '../styles.css';

type CubeFormProps = {
    data: CubeFormType;
    setData: Dispatch<SetStateAction<CubeFormType>>;
    setCurrentCubeId: Dispatch<SetStateAction<string>>;
}

const CubeForm = ({
    data,
    setData,
    setCurrentCubeId,
}: CubeFormProps) => {
    const [report, setReport] = useState<CubeReportType>({
        xPoint: 0, 
        yPoint: 0,
        facingDirection: null,
    });
    const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<CubeFormType>({
        defaultValues: data
    });

    const onSubmit = (formData: CubeFormType) => {
        setData(formData);
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
        formData.cmd.forEach(item => {
            if (item === DirectionCmd.move) {
                switch (reportDirection) {
                    case FacingDirection.west:
                        reportYPoint -= 1;
                        break;
                    case FacingDirection.east:
                        reportYPoint += 1;
                        break;
                    case FacingDirection.north:
                        reportXPoint -= 1;
                        break;
                    case FacingDirection.south:
                        reportXPoint += 1;
                        break;
                }
            } else {
                reportDirection = cmdFacingDirectionMap[item];
            }
        });
        setReport({
            ...report,
            facingDirection: reportDirection,
            xPoint: reportXPoint,
            yPoint: reportYPoint,
        });
        setCurrentCubeId(`${reportXPoint}-${reportYPoint}`);
    }

    const resetHandler = () => {
        reset({...cubeFormDefaultValue, facingDirection: null});
        setData({...cubeFormDefaultValue, facingDirection: null});
        setCurrentCubeId('0-0');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-layout'>
            <input type="hidden" id="cmd" {...register("cmd")} value={watch("cmd")} />
            <Box display='flex' flexDirection='column' height="100%">

                {report?.facingDirection !== null && 
                    <Alert severity="success" className='alert'>
                        Report: {report.xPoint}, {report.yPoint}, {facingDirectionMap[report.facingDirection]}
                    </Alert>
                }
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField id="x-point" label="X Point" 
                            className='text-field' margin='dense'
                            {...register("xPoint", { required: true })}
                            type='number'/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="y-point" label="Y Point" 
                            className='text-field' margin='dense'
                            {...register("yPoint", { required: true })}
                            type='number'/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={0.5}>
                    <Grid item xs={12}>
                        <FormControl fullWidth className='select-field'>
                            <InputLabel id="facing-direction-label">Facing direction</InputLabel>
                            <Select
                            labelId="facing-direction-label"
                            id="facing-direction"
                            {...register("facingDirection", { required: true })}
                            fullWidth
                            label="facing-direction"
                            className='text-field'
                            >
                            <MenuItem value={FacingDirection.north}>North</MenuItem>
                            <MenuItem value={FacingDirection.south}>South</MenuItem>
                            <MenuItem value={FacingDirection.east}>East</MenuItem>
                            <MenuItem value={FacingDirection.west}>West</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={0.5} flex={1}>
                    <Grid item xs={12}>
                        <Box display='flex' mb={1} gap={1}>
                            {data.cmd?.map((item, index) => (<Chip onDelete={() => deleteCmd(index)} label={item} size="small" key={index} />))}
                        </Box>
                        <Box display='flex' gap={1}>
                            <Button variant="outlined" size="small" onClick={() => addCmd(DirectionCmd.move)}>Move</Button>
                            <Button variant="outlined" size="small" onClick={() => addCmd(DirectionCmd.left)}>Left</Button>
                            <Button variant="outlined" size="small" onClick={() => addCmd(DirectionCmd.right)}>Right</Button>
                            <Button variant="outlined" size="small" onClick={() => addCmd(DirectionCmd.up)}>Up</Button>
                            <Button variant="outlined" size="small" onClick={() => addCmd(DirectionCmd.down)}>Down</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={0.5}>
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
