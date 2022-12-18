import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useReducer, useState, useEffect} from 'react';
import {HeaderApp, HomeCardApp} from '../components';
import {AppColor, AppConstant, AppDevice, AppLanguage} from '../common';
import {getPopularMoviesAction} from '../redux/Actions/MoviesAction';
import {useDispatch} from 'react-redux';
let pages = 1;
let pagenumber = 1;
const HomeScreen = ({navigation}) => {
  let dispatch = useDispatch();
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);
  let [loadingMore, setLoadingMore] = useState(false);
  useEffect(() => {
    getData(false);
  }, []);

  let getData = (loadMore = true) => {
    loadMore ? setLoadingMore(true) : setLoading(true);
    dispatch(
      getPopularMoviesAction(
        {api_key: AppConstant.API_KEY, pagenumber: pagenumber++},
        _movies => {
          pages = _movies?.total_pages;
          let da = JSON.parse(JSON.stringify(movies));
          loadMore
            ? setMovies(da.concat(_movies?.results))
            : setMovies(_movies?.results);
          loadMore ? setLoadingMore(false) : setLoading(false);
        },
      ),
    );
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color={AppColor.primary} size={'large'} />
        </View>
      ) : (
        <>
          <HeaderApp title={AppLanguage.welcome + ' ...'} navigation />
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => {
                  pagenumber = 1;
                  getData(true);
                }}
              />
            }
            style={{paddingTop: 10}}
            keyExtractor={(_, index) => index.toString()}
            data={movies}
            ListFooterComponent={() =>
              loadingMore && (
                <ActivityIndicator color={AppColor.primary} size={'large'} />
              )
            }
            ListFooterComponentStyle={{
              height: 60,
              width: AppDevice.width,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            numColumns={2}
            onEndReached={() => {
              if (pagenumber < pages) {
                getData();
              }
            }}
            columnWrapperStyle={{justifyContent: 'space-evenly'}}
            ItemSeparatorComponent={() => (
              <View style={{width: 10, height: 10}} />
            )}
            renderItem={({item}) => {
              return <HomeCardApp movie={item} />;
            }}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
