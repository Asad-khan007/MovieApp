import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../components/CustomHeader';
import {COLORS, SPACING} from '../themes/theme';
import CategoryComponent from '../components/CategoryComponent';
import { searchMovies } from '../apis/Apicalls';

const SearchScreen = (props: any) => {
  const [MoviesList, setMoviesList] = useState<any>([]);

  const SearchMoviesList = async (props: any) => {
    console.log('search', props);
    try {
      let response = await fetch(searchMovies(props));
      // let json = response?.json();
      // setMoviesList(json?.results)
      console.log('response===', response);
    } catch (error) {
      console.error('Search Movies Error', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: COLORS.Black,
      }}>
      <CustomHeader searchFunction={SearchMoviesList} />
      <FlatList
        style={{
          backgroundColor: 'red',
          marginTop: 20,
        }}
        numColumns={2}
        data={MoviesList}
        contentContainerStyle={{
          gap: SPACING.space_36,
        }}
        // keyExtractor={item => item?.id}
        renderItem={({item, index}) => {
          return (
            <CategoryComponent
              shouldMarginetedAtEnd={true}
              // cardFunction={() => {
              //   navigation.push('details', {movieid: item?.id});
              // }}
              // imagePath={baseImagePath('w342', item?.poster_path)}
              // title={item?.original_title}
              // // isFirst={index == 0 ? true : false}
              // isLast={index == upcomingMovies?.length - 1 ? true : false}
            />
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
