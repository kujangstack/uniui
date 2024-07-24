import { AccessibilityProps } from 'react-native';

export interface NullableAccessibilityProps extends AccessibilityProps {
  accessible?: AccessibilityProps['accessible'] | null;
  accessibilityLabel?: AccessibilityProps['accessibilityLabel'] | null;
  accessibilityHint?: AccessibilityProps['accessibilityHint'] | null;
  accessibilityRole?: AccessibilityProps['accessibilityRole'] | null;
}
