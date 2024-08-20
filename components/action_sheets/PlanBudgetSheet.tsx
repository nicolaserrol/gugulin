import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet, { SheetManager, SheetProps } from 'react-native-actions-sheet';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import s from "@/constants/Style";

import Icon from '@/components/Icon';
import Divider from '@/components/Divider';

function PlanBudgetSheet(props: SheetProps<"plan-budget-sheet">) {
  const { data, selected, title } = props.payload || {};

  const renderItem = ({ item }: any) => {
    const isSelected = item.value == selected?.value;
    const onPress = () => {
      SheetManager.hide(props.sheetId, {
        payload: item,
      });
    };

    return (
      <>
        <TouchableOpacity onPress={onPress}>
          <ThemedView style={[s.horizontalStretchCenter, s.mdGutter]}>
              <View style={s.horizontalVCenter}>
                <Icon name={item.icon} />
                <View style={s.mdGutterLeft}>
                  <ThemedText type="default">{item.name}</ThemedText>
                </View>
              </View>
              <Icon name={`radio-button-${isSelected ? 'on' : 'off'}-outline`} />
          </ThemedView>
        </TouchableOpacity>
        <Divider />
      </>
    )
  };

  return (
    <ActionSheet>
      <ThemedView style={s.mdGutter}>
        <ThemedText type="subtitle">{title}</ThemedText>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </ThemedView>
    </ActionSheet>
  );
}
 
export default PlanBudgetSheet;