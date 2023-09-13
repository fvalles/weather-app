import React from 'react';
import {Colors, KeyColors} from '../../theme/colors';
import {Icon as EvaIcon} from 'react-native-eva-icons';

/**
 * Types
 */

interface IconProps {
  /** Icon color */
  color?: KeyColors;
  /** Eva icon name */
  name: string;
  /** Icon size - width and height are equal */
  size?: number;
}
/**
 * Icon Component
 */

export const Icon = ({color = 'white', name, size = 24}: IconProps) => (
  <EvaIcon fill={Colors[color]} height={size} name={name} width={size} />
);
