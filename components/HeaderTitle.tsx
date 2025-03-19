import * as React from "react";
import { Platform, Text, View } from "react-native";
import _ from "lodash";

import s, { width } from "@/constants/Style";

type HeaderTitleProps = {
  caption?: string;
  title: string;
};

const HeaderTitle = ({ caption, title }: HeaderTitleProps) => {
  const alignStyle = {
    ...Platform.select({
      ios: s.textAlignCenter,
    })
  }

  return (
    <View>
      <Text
        numberOfLines={2}
        style={[s.subheading2, alignStyle]}
      >
        {_.startCase(title)}
      </Text>
      {caption ? (<Text style={[s.caption2, alignStyle]}>{caption}</Text>) : null}
    </View>
  );
};

export default HeaderTitle;
