import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const AppWrapper = ({children}) => {
  return (
    
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        {children}
    </SafeAreaView>
    
  )
}

export default AppWrapper