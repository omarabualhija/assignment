import {Dispatch} from 'react';
import {AppConstant} from '../../common';
import {axios} from '../../lib';
import {constant} from '../Constants/constant';
import {AppURL} from '../../common';
export let getPopularMoviesAction = (payload, callBack) => {
  return async dispatch => {
    console.log('getPopularMoviesAction', payload);
    let res = await axios.getAxios(AppURL.getPopularMovies_URL, payload);
    if (callBack) {
      callBack(res);
    }
  };
};
