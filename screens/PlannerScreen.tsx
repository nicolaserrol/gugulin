import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "expo-router";
import _ from "lodash";
import { TabView, TabBarProps } from "react-native-tab-view";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CustomTabBar from "@/components/CustomTabBar";
import Icon from "@/components/Icon";

import { formatCurrency, formatDateTime } from "@/lib/format";

import { useAppSelector } from "@/hooks";

import { useDispatch } from "react-redux";
import { resetPlanner } from "@/features/planner";

import s from "@/constants/Style";

import HeaderTitle from "@/components/HeaderTitle";
import { SheetManager } from "react-native-actions-sheet";
import ProgressBar from "@/components/ProgressBar";

type TabRoute = {
  key: string;
  title: string;
};

const PlannerScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  // const budgetType = useAppSelector((state) => state.preference.budgetType);
  const plan = useAppSelector((state) => state.planner.monthly);
  const currency = useAppSelector((state) => state.preference.currency);
  const targetAmount = useAppSelector(
    (state) => state.planner.monthly.targets?.amount
  );

  let groups = _.groupBy(
    plan?.categories,
    (n: BudgetCategory) => n.group.value
  );
  const { needs, wants, savings } = groups;
  const stats = plan.stats || {};

  const groupAmount = {
    needs: stats.cash.needs + stats.digital.needs,
    wants: stats.cash.wants + stats.digital.wants,
    savings: stats.cash.savings + stats.digital.savings,
  };

  const [index, setIndex] = useState(0);
  const routes = [
    { amount: groupAmount.needs, data: needs, key: "needs", title: "Needs" },
    { amount: groupAmount.wants, data: wants, key: "wants", title: "Wants" },
    {
      amount: groupAmount.savings,
      data: savings,
      key: "savings",
      title: "Savings",
    },
  ];

  const budgetAmount =
    groupAmount.needs + groupAmount.wants + groupAmount.savings;

  const datePlanText = `${formatDateTime(plan.from, "MMMM YYYY")}`;
  let leftToSpend = 0;
  let progressMessage = "";

  if (targetAmount > 0) {
    leftToSpend = targetAmount - budgetAmount;
    progressMessage = `${formatCurrency(leftToSpend, currency)} left to spend`;
    if (leftToSpend < 0)
      progressMessage = `Exceeds ${formatCurrency(
        Math.abs(leftToSpend),
        currency
      )} from your budget`;
  }

  const handleResetPlanner = () => {
    console.log("Planner has ben reset to default");
    dispatch(resetPlanner());
  };

  const handleTargetsPress = () => {
    SheetManager.show("targets-sheet");
  };

  const renderScene = ({ route }) => {
    const { amount, data, key } = route || {};
    const onAddPress = () => {
      navigation.navigate("AddCategory", { key });
    };

    return (
      <ThemedView style={[s.flex1, s.mdGutter]}>
        <View style={s.horizontalStretchCenter}>
          <View style={s.mdGutterBottom}>
            <ThemedText type="subtitle">
              {formatCurrency(amount, currency)}
            </ThemedText>
            <ThemedText type="caption">
              {`${_.startCase(key)} Amount`}
            </ThemedText>
          </View>
          <TouchableOpacity onPress={onAddPress}>
            <Icon name={"add"} size={28} />
          </TouchableOpacity>
        </View>
        <FlatList
          contentContainerStyle={s.flexGrow1}
          data={data}
          ListEmptyComponent={EmptyComponent}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </ThemedView>
    );
  };

  const renderItem = ({ item }: { item: BudgetCategory }) => {
    const onEditPress = () => {
      navigation.navigate("AddCategory", { _id: item._id });
    };

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
              {formatCurrency(item.amount, currency)}
            </ThemedText>
          </View>
        </ThemedView>
      </TouchableOpacity>
    );
  };

  const EmptyComponent = (
    <View style={[s.flex1, s.center]}>
      <ThemedText style={s.textAlignCenter} type="caption">
        {'Start by pressing "+" to add\ncategory for this budget.'}
      </ThemedText>
    </View>
  );

  const renderTabBar = (props: TabBarProps<TabRoute>) => {
    return (
      <ThemedView>
        <CustomTabBar {...props} />
      </ThemedView>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return <HeaderTitle caption={datePlanText} title={"Planner"} />;
      },
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={handleTargetsPress}
            style={s.mdGutterRight}
          >
            <Icon name={"bullseye-arrow"} type={"material-community"} />
          </TouchableOpacity>
        );
      },
    });
  }, [datePlanText]);

  useFocusEffect(
    useCallback(() => {
      if (!targetAmount) handleTargetsPress();
    }, [targetAmount])
  );

  return (
    <>
      <ThemedView style={[s.center, s.mdGutterVertical]}>
        <ThemedText type="subtitle">
          {formatCurrency(budgetAmount, currency)}
        </ThemedText>
        <ThemedText type="text3">{"Budget Amount"}</ThemedText>
        {targetAmount > 0 ? (
          <>
            <ProgressBar actual={budgetAmount} target={targetAmount} />
            <ThemedText type="caption1">{progressMessage}</ThemedText>
          </>
        ) : null}
      </ThemedView>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />

      {__DEV__ ? (
        <ThemedView style={[s.center, s.lgGutterVertical]}>
          <ThemedText onPress={handleResetPlanner} style={s.underline}>
            {"Reset Planner"}
          </ThemedText>
        </ThemedView>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  configureContainer: {
    position: "absolute",
    top: 10,
    right: 20,
  },
});

export default PlannerScreen;