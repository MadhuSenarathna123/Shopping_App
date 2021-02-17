import React,{Component} from 'react';
import {View} from 'react-native';
import MyComponent from '../components/MyComponent';

export default class Home extends Component {
  render() {
    return (
    <View>
        <MyComponent category="Register"/>
    </View>
    );
  }
}  