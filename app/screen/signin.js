import React,{Component} from 'react';
import {View, Text,StyleSheet,ImageBackground,TextInput, TouchableOpacity} from 'react-native';
import MyComponent from '../components/MyComponent';
import Images from '../configs/Images';

export default class Home extends Component {
  onChangeName = text => {console.log(text);};
  onChangePassword = text => {console.log(text);};

  onLogin = () => {this.props.navigation.navigate("Home")}; 
  onRegister = () => {console.log('againCorrect');};

  render() {
    return (
      <View style={styles.container}>
       <ImageBackground source={Images.background02} style={styles.background2}/>
        
        <View style={styles.furniText}>
        <MyComponent furniture="FURNITURE DESIGN"/>

        <TextInput 
        onChangeText={this.onChangeName}
        style={styles.textInput1}
        placeholder="User Name"/>
        <TextInput 
        onChangeText={this.onChangePassword}
        style={styles.textInput2}
        placeholder="password"/>

        <TouchableOpacity 
        onPress={this.onLogin}
        style={styles.button1}>
        <Text style={{fontSize:20}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={this.onRegister}
        style={styles.button2}>
        <Text style={{fontSize:20}}>Register</Text>
        </TouchableOpacity>


        <ImageBackground source={Images.background01} style={styles.background1}/>
        
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
      marginTop:-120
    },
    background2:{
      width: 135,
      height:150,
    },
    background1:{
      width: 350,
      height:200,
    },
    textInput1:{
      width:"90%",
      height:"8%",
      marginTop:55,
      borderWidth:1,
      borderColor:'#000000',
    },
    textInput2:{
      width:"90%",
      height:"8%",
      marginTop:15,
      borderWidth:1,
      borderColor:'#000000',
    },
    button1:{
      width:"90%",
      padding:10,
      marginTop:50,
      borderRadius:35,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#642EFE',
    },
    button2:{
      width:"90%",
      padding:10,
      marginTop:15,
      borderRadius:35,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#BCA9F5',
    },
  }
    );
