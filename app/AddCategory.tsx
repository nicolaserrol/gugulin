import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { useLayoutEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { SheetManager } from "react-native-actions-sheet";

import { useAppSelector } from "@/hooks";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Icon from "@/components/Icon";

import s from "@/constants/Style";
import { removeCategory, setCategory } from "@/features/planner";
import { DEFAULT_AMOUNT_TYPE, DEFAULT_AMOUNT_TYPES, DEFAULT_CATEGORY, DEFAULT_PLAN_GROUP, DEFAULT_PLAN_GROUPS } from "@/constants/Default";
import { getObjectId } from "@/lib/helper";
import {
  BudgetCategoryType,
  AmountTypeType,
  GroupType,
  CategoryType,
} from "@/types";

export default function AddCategoryScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const params = useLocalSearchParams();
  const isEdit = !_.isEmpty(params);

  const groups = DEFAULT_PLAN_GROUPS;

  const categories = useAppSelector((state) => state.preference.categories);
  // const budgetType = useAppSelector((state) => state.preference.budgetType);
  const plan = useAppSelector((state) => state.planner.monthly);

  const budgetCategory = _.find(plan.categories, c => c._id === params._id);

  const defaultGroup = budgetCategory?.group || DEFAULT_PLAN_GROUP;
  const defaultCategory = budgetCategory?.category || DEFAULT_CATEGORY;
  const defaultAmountType = budgetCategory?.amountType || DEFAULT_AMOUNT_TYPE;

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(defaultCategory);
  const [selectedGroup, setSelectedGroup] = useState<GroupType>(defaultGroup);
  const [amount, setAmount] = useState(budgetCategory?.amount || 0);
  const [selectedAmountType, setAmountType] = useState<AmountTypeType>(defaultAmountType);
  const [remarks, setRemarks] = useState(budgetCategory?.remarks || "");
  
  const handleOnSavePress = () => {
    const newCategory: BudgetCategoryType = {
      _id: getObjectId(),
      amount: parseInt(amount),
      amountType: selectedAmountType,
      category: selectedCategory,
      group: selectedGroup,
      remarks,
    };

    dispatch(setCategory(newCategory));
    navigation.goBack();
  };

  useLayoutEffect(() => {
    const disabled = amount < 1;
    navigation.setOptions({
      title: `${isEdit ? 'Edit': 'Add'} a category`,
      headerRight: () => (
        <TouchableOpacity
          disabled={disabled}
          onPress={handleOnSavePress}
          style={{ opacity: disabled ? 0.5 : 1 }}
        >
          <Text style={[s.text3, s.textLight, s.bold]}>{"SAVE"}</Text>
        </TouchableOpacity>
      ),
    });
  }, [
    amount,
    selectedAmountType,
    selectedCategory,
    selectedGroup,
  ]);

  const handlePlanGroupPress = async () => {
    const newGroup = await SheetManager.show('plan-budget-sheet', {
      payload: {
        data: groups,
        selected: selectedGroup,
        title: 'Select a Group',
      }
    });
    if (newGroup) setSelectedGroup(newGroup);
  };
  const handleCategoryPress = async () => {
    const newCategory = await SheetManager.show('plan-budget-sheet', {
      payload: {
        data: categories,
        selected: selectedCategory,
        title: 'Select a Category',
      }
    });
    if (newCategory) setSelectedCategory(newCategory);
  };
  const handleAmountType = async () => {
    const newAmountType = await SheetManager.show('plan-budget-sheet', {
      payload: {
        data: DEFAULT_AMOUNT_TYPES,
        selected: selectedAmountType,
        title: 'Select an Amount Type',
      }
    });
    if (newAmountType) setAmountType(newAmountType);
  };
  const handleRemoveCategory = () => {
    dispatch(removeCategory(params._id))

    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ThemedView style={styles.rowContainer}>
          <TouchableOpacity
            disabled={isEdit}
            onPress={handlePlanGroupPress}
            style={[s.horizontalStretchCenter, { opacity: isEdit ? 0.5 : 1 }]}
          >
            <View style={s.horizontalVCenter}>
              <Icon name={selectedGroup.icon} />
              <View style={s.mdGutterLeft}>
                <ThemedText type="default">{"Group"}</ThemedText>
                <ThemedText type="caption">
                  {selectedGroup?.name}
                </ThemedText>
              </View>
            </View>
            <Icon name={"chevron-forward"} />
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.rowContainer}>
          <TouchableOpacity
            disabled={isEdit}
            onPress={handleCategoryPress}
            style={[s.horizontalStretchCenter, { opacity: isEdit ? 0.5 : 1 }]}
          >
            <View style={s.horizontalVCenter}>
              <Icon name={selectedCategory?.icon} />
              <View style={s.mdGutterLeft}>
                <ThemedText type="default">{"Category"}</ThemedText>
                <ThemedText type="caption">{selectedCategory?.name}</ThemedText>
              </View>
            </View>
            <Icon name={"chevron-forward"} />
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.rowContainer}>
          <TouchableOpacity
            onPress={handleAmountType}
            style={s.horizontalStretchCenter}
          >
            <View style={s.horizontalVCenter}>
              <Icon name={selectedAmountType.icon} />
              <View style={s.mdGutterLeft}>
                <ThemedText type="default">{"Amount Type"}</ThemedText>
                <ThemedText type="caption">{selectedAmountType.name}</ThemedText>
              </View>
            </View>
            <Icon name={"chevron-forward"} />
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.rowContainer}>
          <View style={s.mdGutterLeft}>
            <ThemedText type="default">{"Amount"}</ThemedText>
            <TextInput
              style={s.caption1}
              onChangeText={setAmount}
              placeholderTextColor={s.caption1.color}
              placeholder={"Set amount"}
              keyboardType={"numeric"}
              value={`${amount}`}
            />
          </View>
        </ThemedView>
        <ThemedView style={styles.rowContainer}>
          <View style={s.mdGutterLeft}>
            <ThemedText type="default">{"Remarks"}</ThemedText>
            <TextInput
              style={s.caption1}
              onChangeText={setRemarks}
              placeholderTextColor={s.caption1.color}
              placeholder={"Set remarks"}
              value={`${remarks}`}
            />
          </View>
        </ThemedView>
        
        {isEdit ? (
          <View style={[s.center, s.lgGutterTop]}>
            <ThemedText onPress={handleRemoveCategory} style={s.underline}>
              {"Remove"}
            </ThemedText>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 1,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  caption: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: "ultralight",
  },
});
