import React,{Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Images from '../configs/Images';
import MyComponent from '../components/MyComponent';

export default class Home extends Component {
  onCategory = () => {this.props.navigation.navigate("Category")};
  onFavorite = () => {this.props.navigation.navigate("Favorite")};
  onDiscount = () => {this.props.navigation.navigate("Discount")};
  onOrder = () => {this.props.navigation.navigate("Order_Details")};
  render() {
    return (
      <View> 
      <Image source={Images.home} style={styles.homeImage}/>
  
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          onPress={this.onCategory}
          style={styles.button1}>
          <MyComponent category="Category"/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onFavorite}
          style={styles.button1}>
          <MyComponent category="Favorite"/>
          </TouchableOpacity>
        </View>
      </View> 

      <View>
        <View style={styles.buttonContainer}>

         <TouchableOpacity 
          onPress={this.onDiscount}
          style={styles.button1}>
          <MyComponent category="Discount"/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onOrder}
          style={styles.button1}>
          <MyComponent category="Order"/>
          <MyComponent category="Details"/>
          </TouchableOpacity>
        </View>
      </View>   
      </View> 
    );
  }
}  

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  homeImage:{
    width: "100%",
    height:"50%",
    marginBottom:20,
  },
  buttonContainer: {
    flexDirection:'row',
    alignSelf:'center',
      
  },
  button1:{
      width:"40%",
      height:100,
      padding:10,
      margin:"2%",
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      backgroundColor:'#D8CEF6',
      borderColor:'#000000',
      borderWidth:2,
    },
}
  );