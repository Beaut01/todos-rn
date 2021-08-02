import React from 'react';
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider as StoreProvide} from 'react-redux'
import { Provider as PaperProvider} from 'react-native-paper'
import {store} from "./src/redux/store";

export default function App() {
  return (
      <StoreProvide store={store}>
          <PaperProvider>
            <AppNavigator />
          </PaperProvider>
      </StoreProvide>
  );
}

