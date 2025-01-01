import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/theme';
import CustomIcons from './CustomIcons';

const CustomHeader = (props: any) => {
  const [textValue, setTextValue] = useState('');

  return (
    <View
      style={{
        display: 'flex',
        paddingVertical: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.Grey,
        borderRadius: BORDERRADIUS.radius_20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING.space_18,
      }}>
      <TextInput
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.Grey}
        style={{
          width: '90%',
          color: COLORS.White,
          fontSize: FONTSIZE.size_14,
          fontFamily: FONTFAMILY.poppins_medium,
        }}
        value={textValue}
        onChangeText={text => setTextValue(text)}
      />
      <TouchableOpacity
        onPress={() => props.searchFunction(textValue)}
        style={{
          padding: 4,
        }}>
        <CustomIcons name="search" size={24} color={COLORS.Orange} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
