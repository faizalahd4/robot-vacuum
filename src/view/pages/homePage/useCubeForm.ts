/**
 * Use Cube hook
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
// GENERIC IMPORT
import {SetStateAction, Dispatch} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

// HOME IMPORT
import {CubeFormType, cubeFormDefaultValue, cubeReportDefaultValue, CubeReportType} from '../../../models/cubeForm';
import schema from './schema';

// UTILS IMPORT
import {FacingDirection, DirectionCmd} from '../../../utils/enum';
import {cmdFacingDirectionMap, rotateDegreeMap} from '../../../utils/choices';
import {MIN_LIMIT_BOUNDRY, MAX_LIMIT_BOUNDRY} from '../../../utils/constants';

function useCubeForm(
    data: CubeFormType,
    setData: Dispatch<SetStateAction<CubeFormType>>,
    setCurrentCubeId: Dispatch<SetStateAction<string | null>>,
    setReport: Dispatch<SetStateAction<CubeReportType>>,
    setRotate: Dispatch<SetStateAction<number>>,
    setCmdIndex: Dispatch<SetStateAction<number>>,
) {

    const {
        control, 
        register, 
        handleSubmit, 
        formState: { errors }, 
        watch, 
        setValue, 
        reset 
    } = useForm<CubeFormType>({
        defaultValues: {
            xPoint: '',
            yPoint: '',
            facingDirection: '',
            cmd: [],
        },
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const resetHandler = () => {
        reset(cubeFormDefaultValue);
        setData(cubeFormDefaultValue);
        setReport(cubeReportDefaultValue);
        setCurrentCubeId(null);
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
                            reportYPoint = Math.max(reportYPoint - 1, MIN_LIMIT_BOUNDRY);
                            break;
                        case FacingDirection.east.toString():
                            reportYPoint = Math.min(reportYPoint + 1, MAX_LIMIT_BOUNDRY);
                            break;
                        case FacingDirection.north.toString():
                            reportXPoint = Math.max(reportXPoint - 1, MIN_LIMIT_BOUNDRY);
                            break;
                        case FacingDirection.south.toString():
                            reportXPoint = Math.min(reportXPoint + 1, MAX_LIMIT_BOUNDRY);
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

    return {
        control,
        register,
        handleSubmit,
        errors,
        watch,
        setValue,
        resetHandler,
        addCmd,
        deleteCmd,
        updateDirection,
    }
  }


export default useCubeForm;