import React from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";
import { TabBar } from "react-native-tab-view";

import s from "@/constants/Style";
import { Colors } from "@/constants/Colors";

const getTranslateX = (
  position,
  routes,
  getTabWidth,
  gap
) => {
  const inputRange = routes.map((_, i) => i);

  // every index contains widths at all previous indices
  const outputRange = routes.reduce((acc, _, i) => {
    if (i === 0) return [0];
    return [...acc, acc[i - 1] + getTabWidth(i - 1) + (gap ?? 0)];
  }, []);

  const translateX = position.interpolate({
    extrapolate: "clamp",
    inputRange,
    outputRange,
  });

  return Animated.multiply(translateX, 1);
};

const CustomTabBar = (props) => {
  const renderIndicator = ({
    gap,
    getTabWidth,
    layout,
    navigationState,
    position,
    width,
  }) => {
    const transform = [];
    const height = layout.height;
    const { routes } = navigationState;

    const translateX = routes.length > 1
      ? getTranslateX(position, routes, getTabWidth, gap)
      : 0;

    transform.push({ translateX });

    const style = {
      height,
      padding: 2,
      transform,
      width,
    };

    return (
      <Animated.View style={style}>
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

  return (
    <View style={s.center}>
      <TabBar
        activeColor={Colors.gray0}
        labelStyle={[s.caption1, s.bold]}
        renderIndicator={renderIndicator}
        style={[styles.container, { backgroundColor: Colors.gray0 }]}
        tabStyle={styles.tab}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray0,
    borderRadius: 50,
    width: 300,
  },
  indicator: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    flex: 1,
  },
  tab: {
    padding: 0,
  },
});

export default CustomTabBar;