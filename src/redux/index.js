import {combineReducers} from 'redux';
import {userReducer} from './Reducers/UserReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reducers = combineReducers({
  userReducer: userReducer,
});

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [], // navigation will not be persisted
  whitelist: ['userReducer'], //by defult all state is inclode here
};
