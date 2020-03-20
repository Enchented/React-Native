import * as React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScrollableTabView , { ScrollableTabBar, DefaultTabBar } from "react-native-scrollable-tab-view";


export default function App() {
  return (

<ScrollableTabView
    renderTabBar={()=> <DefaultTabBar />}
    tabBarBackgroundColor='#fff'
    tabBarActiveTextColor='#5ebfff'
    tabBarInactiveTextColor='#333'
>
    <Text  tabLabel='TODO'>TODO</Text >
    <Text  tabLabel='DONE'> DONE</Text >

</ScrollableTabView>
  );
}
