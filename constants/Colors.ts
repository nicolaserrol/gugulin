/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const DEFAULT_COLORS = {
  gray0: '#555555',
  gray1: '#676767',
  gray2: '#828282',
  gray3: '#ABABAB',
  gray4: '#C6C6C6',
  gray5: '#E8E8E8',
  
  default: '#676767',
  info: '#2089dc',
  muted: '#ABABAB',
  danger: '#E93D49',
  success: '#4EAD6F',
  warning: '#faad14',
  white: '#FFFFFF',
  textDefault: '#333333',

  blue: '#2C85D0',
  green: '#4EAD6F',
  lightGreen: '#79C257',
  orange: '#EE5935',
  primary: '#0212a8',
  red: '#E93D49',
  secondary: '#018c75',
  stickyBg: '#FFF0F1',  
};

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    ...DEFAULT_COLORS,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    ...DEFAULT_COLORS,
  },
  ...DEFAULT_COLORS,
};
