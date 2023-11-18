import { View, Text } from 'react-native'
import React from 'react'
import MainNavigation from './Resource/Route/MainNavigation/MainNavigation'
import {Provider} from 'react-redux'
import {store} from './Resource/Helper/Store' 
export default function App() {
  return (
<Provider store={store}>
<MainNavigation/>
</Provider>
  )
}