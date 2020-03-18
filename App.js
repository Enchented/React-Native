import React,{Component} from 'react';
import { StyleSheet,Text, View,Button } from 'react-native';

export default class FlatListBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text >1 Lorem ipsum dolar sit amet</Text>
        <Button
        onPress={this._onPressButton}
        itle="Press Me">
        </Button>
      </View>
      <View style={styles.container}>
         <Text >2 Lorem ipsum dolar </Text>
      </View>
      <View style={styles.container}>
         <Text >3 Lorem ipsum dolar </Text>
      </View>
      <View style={styles.container}>
         <Text >4 Lorem ipsum dolar </Text>
      </View>
      <View style={styles.container}>
         <Text >5 Lorem ipsum dolar </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  }
})