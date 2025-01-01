import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../components/CustomHeader';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/theme';
import {
  baseImagePath,
  NowPlayingMoviesApi,
  PopularMoviesApi,
  UpcomingMoviesApi,
} from '../apis/Apicalls';
import CategoryComponent from '../components/CategoryComponent';
import CustomTitle from '../components/CustomTitle';
import SubCategoryComponent from '../components/SubCategoryComponent';

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any>(undefined);
  const [popularMovies, setPopularMovies] = useState<any>(undefined);
  const [upcomingMovies, setUpcomingMovies] = useState<any>(undefined);

  const UserNowPlayingMoviesFetch = async () => {
    try {
      let response = await fetch(NowPlayingMoviesApi);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error('Error from Now playing movies function', error);
    }
  };
  const UserPopularMovies = async () => {
    try {
      let response = await fetch(PopularMoviesApi);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error('Error from Popular Movies function', error);
    }
  };
  const UserUpcomingMovies = async () => {
    try {
      let response = await fetch(UpcomingMoviesApi);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error('Error from Upcoming Movies Function', error);
    }
  };

  useEffect(() => {
    (async () => {
      let MoviesList = await UserNowPlayingMoviesFetch();
      setNowPlayingMovies(MoviesList?.results);
      console.log('NowPlayingMovies', nowPlayingMovies);
      let PopularList = await UserPopularMovies();
      setPopularMovies(PopularList?.results);
      console.log('PopularMovies', popularMovies);
      let UpcomingList = await UserUpcomingMovies();
      setUpcomingMovies(UpcomingList?.results);
      console.log('UpcomingMovies', upcomingMovies);
    })();
  }, []);

  const SearchFunction = (props: any) => {
    navigation.navigate('search', props);
  };

  if (
    nowPlayingMovies == undefined &&
    nowPlayingMovies == null &&
    popularMovies == undefined &&
    popularMovies == null &&
    upcomingMovies == undefined &&
    upcomingMovies == null
  ) {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.Black}}>
        <View
          style={{
            marginHorizontal: SPACING.space_15,
            marginTop: SPACING.space_10,
          }}>
          <CustomHeader searchFunction={SearchFunction} />
        </View>
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={COLORS.Orange} />
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      bounces={false}
      style={{flex: 1, backgroundColor: COLORS.Black}}>
      <View
        style={{
          marginHorizontal: SPACING.space_15,
          marginTop: SPACING.space_10,
        }}>
        <CustomHeader searchFunction={SearchFunction} />
      </View>
      <CustomTitle title={'Now Playing'} />
      <FlatList
        horizontal
        style={{
          height: 500,
        }}
        data={nowPlayingMovies}
        contentContainerStyle={{
          gap: SPACING.space_28,
          paddingLeft: 20,
          paddingRight: 30,
        }}
        bounces={false}
        snapToInterval={300}
        keyExtractor={item => item?.id}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <SubCategoryComponent
              shouldMarginetedAtEnd={true}
              cardFunction={() => {
                navigation.push('details', {movieid: item?.id});
              }}
              genre={item?.genre_ids?.slice(1, 4)}
              voteAverage={item?.vote_average}
              voteCount={item?.vote_count}
              imagePath={baseImagePath('w780', item?.poster_path)}
              title={item?.original_title}
              // isFirst={index == 0 ? true : false}
              // isLast={index == upcomingMovies?.length - 1 ? true : false}
            />
          );
        }}
      />
      <CustomTitle title={'Popular'} />
      <FlatList
        horizontal
        style={{
          height: 270,
        }}
        data={popularMovies}
        contentContainerStyle={{
          gap: SPACING.space_36,
          paddingLeft: 20,
          paddingRight: 30,
        }}
        keyExtractor={item => item?.id}
        renderItem={({item, index}) => {
          return (
            <CategoryComponent
              shouldMarginetedAtEnd={true}
              cardFunction={() => {
                navigation.push('details', {movieid: item?.id});
              }}
              imagePath={baseImagePath('w342', item?.poster_path)}
              title={item?.original_title}
              // isFirst={index == 0 ? true : false}
              // isLast={index == upcomingMovies?.length - 1 ? true : false}
            />
          );
        }}
      />
      <CustomTitle title={'Upcoming'} />
      <FlatList
        horizontal
        style={{
          height: 270,
        }}
        data={upcomingMovies}
        contentContainerStyle={{
          gap: SPACING.space_36,
          paddingLeft: 20,
          paddingRight: 30,
        }}
        keyExtractor={item => item?.id}
        renderItem={({item, index}) => {
          return (
            <CategoryComponent
              shouldMarginetedAtEnd={true}
              cardFunction={() => {
                navigation.push('details', {movieid: item?.id});
              }}
              imagePath={baseImagePath('w342', item?.poster_path)}
              title={item?.original_title}
              // isFirst={index == 0 ? true : false}
              // isLast={index == upcomingMovies?.length - 1 ? true : false}
            />
          );
        }}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
