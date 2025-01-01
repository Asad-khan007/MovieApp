import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/theme';

const CustomTitle = (props: any) => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.White,
          padding: SPACING.space_20,
          fontSize: FONTSIZE.size_18,
          fontWeight: '600',
          fontFamily: FONTFAMILY.poppins_bold,
          paddingTop: SPACING.space_28,
        }}>
        {props?.title}
      </Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({});
