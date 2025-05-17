import { memo, useMemo } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

// interfaces
import { ButtonProps } from './types';

// constants
import {
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
  DEFAULT_ACCESSIBLE,
  DEFAULT_ACCESSIBILITY_ROLE,
  DEFAULT_ACCESSIBILITY_LABEL,
  DEFAULT_ACCESSIBILITY_HINT,
  DEFAULT_SIZE,
  DEFAULT_ROUNDED,
  DEFAULT_BORDER_WIDTH,
} from './constants';

// styles
import { buttonStyles, buttonTextStyles, pressedButtonStyles } from './styles';

// components
import Typography from '../typography/Typography';

const UniUIButton = ({
  title,
  style: _style,
  textStyle: _textStyle,
  color = DEFAULT_COLOR,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  rounded = DEFAULT_ROUNDED,
  borderWidth = DEFAULT_BORDER_WIDTH,
  accessible: _providedAccessible = DEFAULT_ACCESSIBLE,
  accessibilityRole: _providedAccessibilityRole = DEFAULT_ACCESSIBILITY_ROLE,
  accessibilityLabel: _providedAccessibilityLabel = DEFAULT_ACCESSIBILITY_LABEL,
  accessibilityHint: _providedAccessibilityHint = DEFAULT_ACCESSIBILITY_HINT,
  ...rest
}: ButtonProps) => {
  // base button styles
  buttonStyles.useVariants({
    color,
    variant,
    size,
  });

  buttonTextStyles.useVariants({
    color,
    variant,
    size,
  });

  buttonTextStyles.useVariants({
    color,
    variant,
    size,
  });

  pressedButtonStyles.useVariants({
    color,
    variant,
    size,
  });

  const baseButtonStyles = useMemo(
    () => [
      buttonStyles.extraStyles({ variant, color, rounded, borderWidth }),
      buttonStyles.base,
      _style,
    ],
    [_style, borderWidth, color, rounded, variant]
  );

  const pressedStyles = useMemo(
    () => [
      pressedButtonStyles.extraStyles({ variant, color }),
      pressedButtonStyles.base,
    ],
    [color, variant]
  );

  const textStyles = useMemo(
    () => [
      buttonTextStyles.base,
      buttonTextStyles.extraStyles({ color, variant }),
      ...[Array.isArray(_textStyle) ? _textStyle : [_textStyle]],
    ],
    [_textStyle, color, variant]
  );

  return (
    <Pressable
      style={({ pressed }) =>
        [
          ...baseButtonStyles,
          ...[pressed && pressedStyles],
        ] as StyleProp<ViewStyle>
      }
      {...rest}
    >
      <Typography style={textStyles}>{title}</Typography>
    </Pressable>
  );
};

const Button = memo(UniUIButton);
Button.displayName = 'Button';

export default Button;
