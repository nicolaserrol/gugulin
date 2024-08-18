
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from '@/components/Icon';

import s from '@/constants/Style';
import { useNavigation } from 'expo-router';

import { resetCategories, resetPreference } from '@/features/preference';

type PreferenceRowProps = {
  caption: string;
  title: string;
  onPress?: () => void;
}

const PreferenceRow = ({ caption, title, onPress }: PreferenceRowProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ThemedView style={styles.rowContainer}>
        <View style={s.horizontalStretchCenter}>
          <View>
            <ThemedText>{title}</ThemedText>
            {
              caption ? (
                <ThemedText type='caption'>{caption}</ThemedText>
              ) : null
            }
          </View>
          {
            onPress ? (
              <Icon name={'chevron-forward-outline'} />
            ) : null
          }
        </View>
      </ThemedView>
    </TouchableOpacity>
  )
};

export default function PreferenceScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const budgetType = useSelector(state => state.preference.budgetType);
  const currency = useSelector(state => state.preference.currency);

  const handleCategoryPress = () => navigation.navigate('Categories');
  const handleLogout = () => {
    console.log('Cache has ben reset to default')
    dispatch(resetCategories());
  }

  return (
    <SafeAreaView>
      <PreferenceRow
        caption={'Tag your budget needs'}
        title={'Categories'}
        onPress={handleCategoryPress}
      />
      <PreferenceRow
        caption={`${_.startCase(_.lowerCase(budgetType))}`}
        title={'Budget Type'}
      />
      <PreferenceRow
        caption={`${currency.name}`}
        title={'Currency'}
      />
      {
        __DEV__ ? (
          <View style={[s.center, s.lgGutterTop]}>
            <ThemedText
              onPress={handleLogout}
              style={s.underline}
            >
              {'Reset Cache'}
            </ThemedText>
          </View>
        ) : null
      }
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
