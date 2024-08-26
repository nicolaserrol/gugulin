import React, { useEffect, useState } from "react";
import _ from "lodash";

import { Animated, StyleSheet, View } from "react-native";

import { timeout } from "@/lib/helper";

import s from "@/constants/Style";
import { Colors } from "@/constants/Colors";
type ProgressBarProps = {
  actual: number;
  target: number;
};

const ProgressBar = ({ actual, target }: ProgressBarProps) => {
  const percentageUsed = Math.round(100 * (actual / target));

  const [progress] = useState(new Animated.Value(0));
  const [barWidth, setBarWidth] = useState(0);

  let colorStyle = { bar: {}, track: {} };
  if (actual > target)
    colorStyle = {
      bar: { backgroundColor: Colors.red },
      track: { backgroundColor: `${Colors.red}3A` },
    };

  const startAnimation = async () => {
    await timeout(600);
    Animated.timing(progress, {
      duration: 1200,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleLayout = (e) => {
    const width = e.nativeEvent.layout.width;
    setBarWidth(width);
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = {
    transform: [
      {
        translateX: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -Math.abs((barWidth * percentageUsed) / 100)],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={s.mdGutterTop} />
      <View onLayout={handleLayout} style={[styles.track, colorStyle.track]}>
        <Animated.View style={[styles.bar, style, colorStyle.bar]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  bar: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    height: 8,
    width: "100%",
  },
  track: {
    backgroundColor: `${Colors.primary}3A`,
    borderRadius: 5,
    height: 8,
    overflow: "hidden",
  },
});

export default ProgressBar;
