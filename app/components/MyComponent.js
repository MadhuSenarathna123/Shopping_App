import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.catrgoryText1}>{this.props.furniture}</Text>
        <Text style={styles.catrgoryText}>{this.props.category}</Text>
        <Text style={styles.registerText}>{this.props.register}</Text>
      </View>
    );
  }
} 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center'
  },
  catrgoryText:{
    fontSize:22,
    alignSelf:'center',
    alignItems:'center',
    marginTop:-35

  },
  catrgoryText1:{
    fontSize:27,
    color:'#4B088A',
    fontWeight:'bold'
  },
  registerText:{
    fontSize:25,
    marginTop:-25
  },
}
  );