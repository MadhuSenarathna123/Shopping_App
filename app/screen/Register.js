import React,{Component} from 'react';
import {View, Text,StyleSheet,ImageBackground,TextInput, TouchableOpacity} from 'react-native';
import MyComponent from '../components/MyComponent';
import Images from '../configs/Images';

export default class Home extends Component {
  onChangeName = text => {console.log(text);};
  onChangePassword = text => {console.log(text);};
  onChangeConfirm = text => {console.log(text);};

  onSignin = () => {this.props.navigation.navigate("Home")}; 
  onCancel = () => {this.props.navigation.navigate("Register")};

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.furniText}>
        <MyComponent furniture="FURNITURE DESIGN"/>

        <TextInput 
        onChangeText={this.onChangeName}
        style={styles.textInput1}
        placeholder="User Name"/>

        <TextInput 
        onChangeText={this.onChangePassword}
        style={styles.textInput2}
        placeholder="New Password"/>

        <TextInput 
        onChangeText={this.onChangeConfirm}
        style={styles.textInput2}
        placeholder="Confirm Password"/>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          onPress={this.onSignin}
          style={styles.button1}>
          <MyComponent register="Sign in"/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onCancel}
          style={styles.button2}>
      <MyComponent register="Cancel"/>
          </TouchableOpacity>
          </View>


      <ImageBackground source={Images.registr} style={styles.image}/>
        
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
    furniText:{
      alignItems: 'center',
      marginTop:30,
    },
    image:{
      width: 350,
      height:200,
      marginTop:15
    },
    textInput1:{
      width:"90%",
      height:"9%",
      marginTop:30,
      borderWidth:1,
      borderColor:'#000000',
      borderRadius:10
    },
    textInput2:{
      width:"90%",
      height:"9%",
      marginTop:15,
      borderWidth:1,
      borderColor:'#000000',
      borderRadius:10
    },
    buttonContainer: {
      flexDirection:'row',
      alignSelf:'center',
      marginTop:35,
      marginBottom:-15
    },
    button1:{
      width:"45%",
      padding:10,
      borderRadius:35,
      alignItems:'center',
      marginRight:20,
      backgroundColor:'#642EFE',
    },
    button2:{
      width:"45%",
      padding:10,
      borderRadius:35,
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      backgroundColor:'#BCA9F5',
    },
  }
    );
