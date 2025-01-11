import {View, Text, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../components/CustomHeader';
import {COLORS, SPACING} from '../themes/theme';
import CategoryComponent from '../components/CategoryComponent';
import {baseImagePath, searchMovies} from '../apis/Apicalls';

const {height, width} = Dimensions.get('window');

const SearchScreen = (props: any) => {
  const [MoviesList, setMoviesList] = useState<any>([]);

  const SearchMoviesList = async (name: any) => {
    console.log('Search', name);
    try {
      let response = await fetch(searchMovies(name));
      let json = await response?.json();
      if (json) {
        setMoviesList(json?.results);
        console.log('STATE', json?.results);
      }
    } catch (error) {
      console.log('Error', error);
    }
    // await fetch(searchMovies(name))
    //   .then(res => {
    //     let json = res?.json();
    //     setMoviesList(json?.results);
    //   })
    //   .then(() => console.log('State', MoviesList))
    //   .catch(err => console.error('Error', err));
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
          marginTop: 20,
        }}
        numColumns={2}
        data={MoviesList}
        contentContainerStyle={{
          gap: SPACING.space_28,
          alignItems: 'center',
          paddingTop: 20,
        }}
        // keyExtractor={item => item?.id}
        renderItem={({item, index}) => {
          return (
            <CategoryComponent
              shouldMarginetedAtEnd={true}
              horizontal={width * 0.04}
              // cardFunction={() => {
              //   navigation.push('details', {movieid: item?.id});
              // }}
              imagePath={baseImagePath('w342', item?.poster_path)}
              title={item?.original_title}
            />
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
