import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import _ from "lodash";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { formatCurrency, formatDateTime } from "@/lib/format";

import { useAppSelector } from "@/hooks";

import { useDispatch } from "react-redux";
import { resetPlanner } from "@/features/planner";

import s from "@/constants/Style";
import Separator from "@/components/Separator";
import Icon from "@/components/Icon";
import { BudgetCategoryType } from "@/types";

export default function PlannerScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // const budgetType = useAppSelector((state) => state.preference.budgetType);
  const plan = useAppSelector((state) => state.planner.monthly);
  const currency = useAppSelector((state) => state.preference.currency);

  let groups = _.groupBy(
    plan?.categories,
    (n: BudgetCategoryType) => n.group.value
  );
  const { needs, wants, savings } = groups;
  const stats = plan.stats || {};

  const groupAmount = {
    needs: stats.cash.needs + stats.digital.needs,
    wants: stats.cash.wants + stats.digital.wants,
    savings: stats.cash.savings + stats.digital.savings,
  };
  const budgetAmount =
    groupAmount.needs + groupAmount.wants + groupAmount.savings;

  const datePlanText = `${formatDateTime(
    plan.from,
    "MMMM D"
  )} - ${formatDateTime(plan.to, "MMMM D")}`;

  const handleResetPlanner = () => {
    console.log("Planner has ben reset to default");
    dispatch(resetPlanner());
  };

  useLayoutEffect(() => {
    const onAddPress = () => navigation.navigate("AddCategory");
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onAddPress} style={s.mdGutterRight}>
          <Icon name={"add"} size={28} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const renderItem = ({ item }: { item: BudgetCategoryType }) => {
    const onEditPress = () =>
      navigation.navigate("AddCategory", { _id: item._id });
    return (
      <TouchableOpacity onPress={onEditPress}>
        <ThemedView style={[s.mdGutterHorizontal, s.smGutterVertical]}>
          <View style={s.horizontalStretchCenter}>
            <View style={s.horizontalVCenter}>
              <Icon name={item.amountType.icon} />
              <View style={s.mdGutterLeft}>
                <ThemedText type="defaultSemiBold">
                  {item.category.name}
                </ThemedText>
                {item.remarks ? (
                  <ThemedText type="caption">
                    {_.startCase(item.remarks)}
                  </ThemedText>
                ) : null}
              </View>
            </View>
            <ThemedText type="caption" style={s.bold}>
              {formatCurrency(item.amount, currency.prepend)}
            </ThemedText>
          </View>
        </ThemedView>
      </TouchableOpacity>
    );
  };

  const EmptyComponent = (
    <View style={s.center}>
      <ThemedText style={s.textAlignCenter} type="caption">
        {'Start by pressing "+" to add\ncategory for this budget.'}
      </ThemedText>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={s.lgGutterBottom}>
        <ThemedView style={[s.center, s.mdGutterVertical]}>
          <ThemedText type="subtitle">
            {formatCurrency(budgetAmount, currency.prepend)}
          </ThemedText>
          <ThemedText type="caption">{"Budget Amount"}</ThemedText>
          <ThemedText type="defaultSemiBold">{datePlanText}</ThemedText>
        </ThemedView>
        <Separator />
        <ThemedView style={[s.mdGutter]}>
          <View style={s.horizontalStretchCenter}>
            <ThemedText type="subtitle">{"Needs"}</ThemedText>
            <ThemedText type="subtitle">
              {formatCurrency(groupAmount.needs, currency.prepend)}
            </ThemedText>
          </View>
          <FlatList
            data={needs}
            ListEmptyComponent={EmptyComponent}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </ThemedView>
        <Separator />
        <ThemedView style={[s.mdGutter]}>
          <View style={s.horizontalStretchCenter}>
            <ThemedText type="subtitle">{"Wants"}</ThemedText>
            <ThemedText type="subtitle">
              {formatCurrency(groupAmount?.wants, currency.prepend)}
            </ThemedText>
          </View>
          <FlatList
            data={wants}
            ListEmptyComponent={EmptyComponent}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </ThemedView>
        <Separator />
        <ThemedView style={[s.mdGutter]}>
          <View style={s.horizontalStretchCenter}>
            <ThemedText type="subtitle">{"Savings"}</ThemedText>
            <ThemedText type="subtitle">
              {formatCurrency(groupAmount?.savings, currency.prepend)}
            </ThemedText>
          </View>
          <FlatList
            data={savings}
            ListEmptyComponent={EmptyComponent}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </ThemedView>
        {__DEV__ ? (
          <View style={[s.center, s.lgGutterTop]}>
            <ThemedText onPress={handleResetPlanner} style={s.underline}>
              {"Reset Planner"}
            </ThemedText>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
});
