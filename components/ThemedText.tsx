import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import s from '@/constants/Style';
import { Colors } from '@/constants/Colors';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const color = Colors['light'].text;
  let typeStyle = {};

  switch (type) {
    case "default": {
      typeStyle = styles.default;
      break;
    }
    case "title": {
      typeStyle = styles.title;
      break;
    }
    case "defaultSemiBold": {
      typeStyle = styles.defaultSemiBold;
      break;
    }
    case "subtitle": {
      typeStyle = styles.subtitle;
      break;
    }
    case "link": {
      typeStyle = styles.link;
      break;
    }
    default: {
      typeStyle = s[type];
      break;
    }
  }

  return (
    <Text
      style={[
        { color },
        typeStyle,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  caption: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 'ultralight',
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
