
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { useEffect } from 'react';
import _ from 'lodash';

import { useDispatch } from 'react-redux';
import { resetCategories } from '@/features/preference';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from '@/components/Icon';

import { useAppSelector } from '@/hooks';

import s from '@/constants/Style';
import { CategoryType } from '@/types';

type CategoryRowProps = {
  icon: string;
  name: string;
}

const PreferenceRow = ({ icon, name }: CategoryRowProps) => {
  return (
    <ThemedView style={styles.rowContainer}>
      <View style={s.horizontal}>
        <Icon name={icon} />
        <ThemedText style={s.smGutterLeft}>{name}</ThemedText>
      </View>
    </ThemedView>
  )
};

export default function CategoriesScreen() {
  const dispatch = useDispatch();

  const categories = useAppSelector(state => state.preference.categories);

  const renderItem = ({ item }: { item: CategoryType }) => <PreferenceRow {...item} />;

  useEffect(() => {
    dispatch(resetCategories());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={s.lgGutterBottom}
        data={categories}
        renderItem={renderItem}
      />
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
    position: 'absolute',
  },
});
