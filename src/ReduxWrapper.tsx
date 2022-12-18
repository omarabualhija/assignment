import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import NavigationApp from './Navigation';
//react-native-root-toast  for more info.=>  https://github.com/magicismight/react-native-root-toast
import {RootSiblingParent} from 'react-native-root-siblings';
import {reducers, persistConfig} from './redux';

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const ReduxWrapper = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationApp />
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default ReduxWrapper;
