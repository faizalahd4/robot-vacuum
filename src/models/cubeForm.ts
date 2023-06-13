import {FacingDirection, DirectionCmd} from '../utils/enum';

export type CubeFormType = {
    xPoint: number;
    yPoint: number;
    facingDirection: FacingDirection | null; 
    cmd: DirectionCmd[];
}

export type CubeReportType = {
    xPoint: number;
    yPoint: number;
    facingDirection: FacingDirection | null;
}

export const cubeFormDefaultValue = {
    xPoint: 0, 
    yPoint: 0,
    facingDirection: null,
    cmd: [],
}