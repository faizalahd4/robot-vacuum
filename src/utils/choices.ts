/**
 * Choices
 * 
 * @author - Faizal
 * @date - 14th June, 2023 
 */
import {DirectionCmd, FacingDirection} from './enum';

export const directionCmdChoices = [
  {value: DirectionCmd.move, label: 'Move'},
  {value: DirectionCmd.left, label: 'Left'},
  {value: DirectionCmd.right, label: 'Right'},
  {value: DirectionCmd.up, label: 'Up'},
  {value: DirectionCmd.down, label: 'Down'},
];

export const facingDirectionMap = {
  [FacingDirection.east]: 'East',
  [FacingDirection.north]: 'North',
  [FacingDirection.south]: 'South',
  [FacingDirection.west]: 'West',
};

export const cmdFacingDirectionMap = {
  [DirectionCmd.left]: FacingDirection.west,
  [DirectionCmd.right]: FacingDirection.east,
  [DirectionCmd.up]: FacingDirection.north,
  [DirectionCmd.down]: FacingDirection.south,
};