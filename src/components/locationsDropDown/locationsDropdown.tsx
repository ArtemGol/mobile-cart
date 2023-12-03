import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DropDownModalLayout} from './components/dropDownModalLayout';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  imageOptions,
  localeOptions,
} from '../../../assets/constants/localeOptions';
import {colors} from '../../../assets/colors/colors';

export const LocationsDropdown = () => {
  const {i18n} = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [locale, setLocale] = useState<string>('en');
  const handleSetActiveLocation = (e: GestureResponderEvent, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    setLocale(key);
    i18n.changeLanguage(key).then();
  };

  return (
    <Pressable onPress={() => setOpen(!open)} style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{localeOptions[locale]}</Text>
        <Icon
          name={open ? 'chevron-up' : 'chevron-down'}
          size={25}
          color={colors.white}
        />
      </View>
      <Image
        style={styles.mainImg}
        source={{
          uri: `https://assets.jokerlivestream.vip/uploads/locations/${imageOptions[locale]}.png`,
        }}
      />
      {open && (
        <DropDownModalLayout
          onPress={() => {
            setOpen(false);
          }}>
          <ScrollView
            onScroll={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
            contentContainerStyle={styles.optionsBlock}>
            {Object.entries(localeOptions)
              .filter(([key]) => key !== locale)
              .map(([key, value]) => (
                <TouchableOpacity
                  onPress={e => handleSetActiveLocation(e, key)}
                  activeOpacity={0.5}
                  key={key}
                  style={styles.optionItem}>
                  <Text style={styles.optionSpan}>{value}</Text>
                  <Image
                    style={styles.mainImg}
                    source={{
                      uri: `https://assets.jokerlivestream.vip/uploads/locations/${imageOptions[key]}.png`,
                    }}
                  />
                </TouchableOpacity>
              ))}
          </ScrollView>
        </DropDownModalLayout>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: colors.gray,
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
  },
  mainImg: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  optionsBlock: {
    width: 260,
    paddingTop: 5,
    paddingBottom: 5,
    top: 62,
    left: 10,
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: colors.gray,
  },
  optionItem: {
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 30,
  },
  optionSpan: {
    color: colors.white,
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
  },
});
