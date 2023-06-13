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

export const cmdFacingDirectionMap: Record<DirectionCmd, FacingDirection> = {
  [DirectionCmd.move]: FacingDirection.west,
  [DirectionCmd.left]: FacingDirection.west,
  [DirectionCmd.right]: FacingDirection.east,
  [DirectionCmd.up]: FacingDirection.north,
  [DirectionCmd.down]: FacingDirection.south,
};

export const facingDirectionChoice = [
  { label: 'North', value: FacingDirection.north },
  { label: 'South', value: FacingDirection.south },
  { label: 'East', value: FacingDirection.east },
  { label: 'West', value: FacingDirection.west },
];