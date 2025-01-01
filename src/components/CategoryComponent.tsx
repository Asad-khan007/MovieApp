import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/theme';

const CategoryComponent = (props: any) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 160,
        }}>
        <Image
          style={{
            height: 220,
            width: 150,
            borderRadius: BORDERRADIUS.radius_20,
          }}
          source={{uri: props?.imagePath}}
        />
        <Text
          numberOfLines={1}
          style={{
            color: COLORS.White,
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_14,
            textAlign: 'center',
            paddingVertical: SPACING.space_10,
          }}>
          {props?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({});
