import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import _ from "lodash";
import Constants from "expo-constants";
import * as Updates from 'expo-updates';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Icon from "@/components/Icon";

import { useAppSelector } from "@/hooks";

import s from "@/constants/Style";
import { useFocusEffect, useNavigation } from "expo-router";

import {
  resetOptions,
  resetPreference,
  setCurrency,
} from "@/features/preference";
import { SheetManager } from "react-native-actions-sheet";
import { useCallback, useEffect, useState } from "react";
import Separator from "@/components/Separator";

type PreferenceRowProps = {
  caption: string;
  loading?: boolean;
  title: string;
  onPress?: () => void;
};

const PreferenceRow = ({
  caption,
  loading,
  title,
  onPress,
}: PreferenceRowProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ThemedView style={styles.rowContainer}>
        <View style={s.horizontalStretchCenter}>
          <View>
            <ThemedText>{title}</ThemedText>
            {caption ? <ThemedText type="caption">{caption}</ThemedText> : null}
          </View>
          {onPress ? (
            loading ? (
              <ActivityIndicator />
            ) : (
              <Icon name={"chevron-forward-outline"} />
            )
          ) : null}
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default function PreferenceScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const budgetType = useAppSelector((state) => state.preference.budgetType);
  const currency = useAppSelector((state) => state.preference.currency);
  const currencies = useAppSelector((state) => state.preference.currencies);

  const [loading, setLoading] = useState(false);

  const handleCategoryPress = () => navigation.navigate("Categories");
  const handleLogout = () => {
    console.log("Cache has ben reset to default");
    dispatch(resetPreference());
  };
  const handleCurrencyPress = async () => {
    const newCurrency = await SheetManager.show("plan-budget-sheet", {
      payload: {
        data: currencies,
        selected: currency,
        title: "Select a Currency",
      },
    });
    if (newCurrency) dispatch(setCurrency(newCurrency));
  };
  const handleCheckUpdate = async () => {
    if (__DEV__ || loading) return;

    try {
      setLoading(true);
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        setLoading(false);
        setTimeout(() => {
          Updates.reloadAsync();
        }, 1000)
      } else setLoading(false);
    } catch (err) {
      // catch silently
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(resetOptions());
      console.log("RESET OPTIONS");
    }, [])
  );

  return (
    <SafeAreaView>
      <PreferenceRow
        caption={`${_.startCase(_.lowerCase(budgetType))}`}
        title={"Budget Type"}
      />
      <PreferenceRow
        caption={`${currency.name}`}
        title={"Currency"}
        onPress={handleCurrencyPress}
      />
      <PreferenceRow
        caption={"List of categories"}
        title={"Categories"}
        onPress={handleCategoryPress}
      />
      <Separator />
      <PreferenceRow
        caption={`Version: ${Constants.expoConfig?.version}`}
        loading={loading}
        title={"Check for Update"}
        onPress={handleCheckUpdate}
      />
      {__DEV__ ? (
        <View style={[s.center, s.lgGutterTop]}>
          <ThemedText onPress={handleLogout} style={s.underline}>
            {"Reset Cache"}
          </ThemedText>
        </View>
      ) : null}
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
});
