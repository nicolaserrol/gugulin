import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from "react-native";
import ActionSheet, {
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";
import _ from 'lodash';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import s from "@/constants/Style";

import Icon from "@/components/Icon";
import Divider from "@/components/Divider";
import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { Colors } from "@/constants/Colors";
import { useDispatch } from "react-redux";
import { setTargets } from "@/features/planner";

function TargetsSheet() {
  const dispatch = useDispatch();

  const defaultTargets = {
    amount: 0,
    needs: 0.5,
    wants: 0.3,
    savings: 0.2,
  }
  let targets = useAppSelector((state) => state.planner.monthly.targets) || defaultTargets;

  const [amount, setAmount] = useState(targets?.amount);
  const [needs, setNeeds] = useState(targets.needs * 100);
  const [wants, setWants] = useState(targets.wants * 100);
  const [savings, setSavings] = useState(targets.savings * 100);

  const handleOnSavePress = () => {
    dispatch(setTargets({
      amount: parseInt(amount),
      needs: needs / 100,
      wants: wants / 100,
      savings: savings / 100,
    }));
    SheetManager.hide('targets-sheet');
  };

  return (
    <ActionSheet>
      <ThemedView style={[s.mdGutter, s.sheetContainer]}>
        <ThemedText type="heading4">{"Set Targets"}</ThemedText>
        <ThemedView style={s.mdGutterTop}>
          <View>
            <ThemedText type="text3">{"Budget Amount"}</ThemedText>
            <TextInput
              style={styles.textInput}
              onChangeText={setAmount}
              placeholderTextColor={s.caption1.color}
              placeholder={"Set amount"}
              keyboardType={"numeric"}
              value={`${parseInt(amount) > 0 ? amount : ""}`}
            />
          </View>
          
          {/* <View style={s.smGutterTop}>
            <ThemedText type="text3">{"Needs Percentage"}</ThemedText>
            <TextInput
              style={styles.textInput}
              onChangeText={setNeeds}
              placeholderTextColor={s.caption1.color}
              placeholder={"Set amount"}
              keyboardType={"numeric"}
              value={`${needs}`}
            />
          </View>
          <View style={s.smGutterTop}>
            <ThemedText type="text3">{"Needs Percentage"}</ThemedText>
            <TextInput
              style={styles.textInput}
              onChangeText={setWants}
              placeholderTextColor={s.caption1.color}
              placeholder={"Set amount"}
              keyboardType={"numeric"}
              value={`${wants}`}
            />
          </View>
          <View style={s.smGutterTop}>
            <ThemedText type="text3">{"Needs Percentage"}</ThemedText>
            <TextInput
              style={styles.textInput}
              onChangeText={setSavings}
              placeholderTextColor={s.caption1.color}
              placeholder={"Set amount"}
              keyboardType={"numeric"}
              value={`${savings}`}
            />
          </View> */}
        </ThemedView>
        <TouchableOpacity
          onPress={handleOnSavePress}
          style={styles.buttonContainer}
        >
          <ThemedText type="text3" style={[s.textLight, s.textAlignCenter]}>{"Save"}</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.blue,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15,
    width: 200,
  },
  textInput: {
    ...s.caption1,
    borderColor: Colors.gray3,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default TargetsSheet;
