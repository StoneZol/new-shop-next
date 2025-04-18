'use client'
import { Provider } from 'react-redux'
import {store} from './store'
import { persistStore } from 'redux-persist'

persistStore(store)
export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
  }
