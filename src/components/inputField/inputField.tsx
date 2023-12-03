import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';

interface IProps {
  label?: any;
  inputType?: any;
  keyboardType?: any;
  fieldButtonLabel?: any;
  fieldButtonFunction?: any;
  onChangeText: ((text: string) => void) | undefined;
  value: string;
  fieldError?: string;
  iconName: string;
}

const InputField = ({
  label,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  value,
  fieldError,
  iconName,
}: IProps) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.field,
          {borderBottomColor: fieldError ? colors.red : colors.gray},
        ]}>
        <Icon name={iconName} color={colors.gray} size={25} />
        <TextInput
          placeholderTextColor={colors.black}
          placeholder={t(label)}
          value={value}
          keyboardType={keyboardType}
          style={styles.inputText}
          onChangeText={onChangeText}
          secureTextEntry={inputType === 'password'}
        />
        {fieldError ? (
          <Icon name="error" color={colors.red} size={25} />
        ) : (
          <TouchableOpacity onPress={fieldButtonFunction}>
            <Text style={styles.fieldPress}>{fieldButtonLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text style={styles.textError}>{fieldError}</Text>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    width: '100%',
  },
  field: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  inputText: {
    flex: 1,
    paddingVertical: 0,
    color: '#000',
  },
  fieldPress: {
    color: colors.gray,
    fontWeight: '700',
  },
  textError: {
    color: colors.red,
  },
});
