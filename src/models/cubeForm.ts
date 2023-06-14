import {DirectionCmd} from '../utils/enum';

export type CubeFormType = {
    xPoint: string;
    yPoint: string;
    facingDirection: string;
    cmd: DirectionCmd[];
}

export type CubeReportType = {
    xPoint: string;
    yPoint: string;
    facingDirection: string;
}

export const cubeFormDefaultValue: CubeFormType = {
    xPoint: '',
    yPoint: '',
    facingDirection: '',
    cmd: [],
}

export const cubeReportDefaultValue: CubeReportType = {
    xPoint: '', 
    yPoint: '',
    facingDirection: '',
}

        