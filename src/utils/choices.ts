/**
 * Choices
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import {DirectionCmd, FacingDirection} from './enum';

export const facingDirectionMap: Record<string, string> = {
  [FacingDirection.east]: 'East',
  [FacingDirection.north]: 'North',
  [FacingDirection.south]: 'South',
  [FacingDirection.west]: 'West',
};

export const cmdFacingDirectionMap: Record<string, Record<DirectionCmd, FacingDirection>> = {
  [FacingDirection.north]: {
    [DirectionCmd.move]: FacingDirection.north,
    [DirectionCmd.left]: FacingDirection.west,
    [DirectionCmd.right]: FacingDirection.east,
  },
  [FacingDirection.south]: {
    [DirectionCmd.move]: FacingDirection.south,
    [DirectionCmd.left]: FacingDirection.east,
    [DirectionCmd.right]: FacingDirection.west,
  },
  [FacingDirection.east]: {
    [DirectionCmd.move]: FacingDirection.east,
    [DirectionCmd.left]: FacingDirection.north,
    [DirectionCmd.right]: FacingDirection.south,
  },
  [FacingDirection.west]: {
    [DirectionCmd.move]: FacingDirection.west,
    [DirectionCmd.left]: FacingDirection.south,
    [DirectionCmd.right]: FacingDirection.north,
  },
};

export const facingDirectionChoice = [
  { label: 'North', value: FacingDirection.north },
  { label: 'South', value: FacingDirection.south },
  { label: 'East', value: FacingDirection.east },
  { label: 'West', value: FacingDirection.west },
];

export const facingDirectionDegreeMap: Record<string, number> = {
  [FacingDirection.east]: -90,
  [FacingDirection.west]: 90,
  [FacingDirection.north]: 180,
  [FacingDirection.south]: 0,
};

export const rotateDegreeMap: Record<DirectionCmd, number> = {
  [DirectionCmd.move]: 0,
  [DirectionCmd.left]: -90,
  [DirectionCmd.right]: 90,
};