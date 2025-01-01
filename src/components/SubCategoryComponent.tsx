import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/theme';
import CustomIcons from './CustomIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const genres: any = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentry',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystry',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const SubCategoryComponent = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props?.cardFunction()}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 320,
        }}>
        <Image
          style={{
            height: 380,
            width: 290,
            borderRadius: BORDERRADIUS.radius_20,
          }}
          source={{uri: props?.imagePath}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <CustomIcons name="star" color={COLORS.Yellow} size={12} />
          <Text
            style={{
              fontSize: FONTSIZE.size_10,
              fontFamily: FONTFAMILY.poppins_medium,
              color: COLORS.White,
              paddingLeft: 2,
            }}>
            {props?.voteAverage}
          </Text>
          <Text
            style={{
              fontSize: FONTSIZE.size_10,
              fontFamily: FONTFAMILY.poppins_medium,
              color: COLORS.White,
              paddingLeft: 5,
            }}>{`(${props?.voteCount})`}</Text>
        </View>
        <Text
          numberOfLines={1}
          style={{
            color: COLORS.White,
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_24,
            textAlign: 'center',
            paddingVertical: SPACING.space_10,
            fontWeight: '400',
          }}>
          {props?.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          {props?.genre.map((item: any) => {
            return (
              <View
                key={item}
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.Grey,
                  borderRadius: BORDERRADIUS.radius_15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    fontSize: FONTSIZE.size_10,
                    color: COLORS.WhiteRGBA75,
                  }}>
                  {genres[item]}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SubCategoryComponent;

const styles = StyleSheet.create({});
