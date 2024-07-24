import { Dimensions } from 'react-native';

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen');

const COMPONENT_VARIANT_SIZE = {
  'small': 30,
  'medium': 38,
  'large': 46,
  'extra-large': 52,
} as const;

export {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  COMPONENT_VARIANT_SIZE,
};
