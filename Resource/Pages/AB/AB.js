import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function AB() {
  return (
<WebView 
source={{ uri: 'https://abstractbrains.com/' }} />
  )
}