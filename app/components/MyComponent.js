import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text style={{Color:'#4000FF'},{fontSize:26}}>{this.props.furniture}</Text>
      </View>
    );
  }
} 