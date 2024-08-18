
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from '@/components/Icon';

import s from '@/constants/Style';
import { useNavigation, useRouter } from 'expo-router';

import { NavigationProp } from '@react-navigation/native';
import { DEFAULT_CATEGORIES } from '@/constants/Default';

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
  const categories = useSelector(state => state.preference.categories);

  const renderItem = ({ item }) => <PreferenceRow {...item} />;

  return (
    <SafeAreaView>
      <FlatList
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
