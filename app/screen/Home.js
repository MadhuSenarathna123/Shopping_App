import React,{Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Images from '../configs/Images';

export default class Home extends Component {
  onCategory = () => {this.props.navigation.navigate("Category")};
  onFavorite = () => {console.log('a');};
  onDiscount = () => {console.log('correct');};
  onOrder = () => {console.log('againCorrect');};
  render() {
    return (
      <View> 
      <Image source={Images.home} style={styles.homeImage}/>
  
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          onPress={this.onCategory}
          style={styles.button1}>
          <Text style={{fontSize:22}}>Category</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onFavorite}
          style={styles.button1}>
          <Text style={{fontSize:22}}>Favorite</Text>
          </TouchableOpacity>
        </View>
      </View> 

      <View>
        <View style={styles.buttonContainer}>

         <TouchableOpacity 
          onPress={this.onDiscount}
          style={styles.button1}>
          <Text style={{fontSize:22}}>Discount</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onOrder}
          style={styles.button1}>
          <Text style={{fontSize:22}}>Order Detail</Text>
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