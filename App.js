import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import MainNavigator from './src/navigation/MealsNavigator';
import mealsReducer from './src/store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
