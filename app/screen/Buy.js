import React,{Component} from 'react';
import {View, Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  onChangeQuantity = text => {console.log(text);};
  onChangeColor = text => {console.log(text);};
  onChangeContact = text => {console.log(text);};
  onChangeMobile = text => {console.log(text);};
  onChangeMail = text => {console.log(text);};
  onChangeShipping = text => {console.log(text);};
  onChangeCity = text => {console.log(text);};
  onChangePcode = text => {console.log(text);};

  onLogin = () => {console.log('correct');}; 
  onRegister = () => {console.log('againCorrect');};

  render() {
    return (
      <View style={styles.container}>

        <TextInput onChangeText={this.onChangeQuantity} 
        style={styles.textInput} placeholder="Quantity"/>

        <TextInput onChangeText={this.onChangeColor}
        style={styles.textInput1} placeholder="Color"/>

        <TextInput onChangeText={this.onChangeContact}
        style={styles.textInput1} placeholder="Contact Number"/>

        <TextInput onChangeText={this.onChangeMobile}
        style={styles.textInput1} placeholder="Mobile Number"/>

        <TextInput onChangeText={this.onChangeMail}
        style={styles.textInput1} placeholder="E-mail"/>

        <TextInput onChangeText={this.onChangeShipping}
        style={styles.textInput1} placeholder="Shipping Address"/>

        <TextInput onChangeText={this.onChangeCity}
        style={styles.textInput1} placeholder="City"/>

        <TextInput onChangeText={this.onChangePcode}
        style={styles.textInput1} placeholder="Postal Code"/>

        <View style={styles.buttonContainer}>
            <TouchableOpacity 
             onPress={this.onLogin}
             style={styles.button1}>
             <Text style={{fontSize:24}}>Add Favorite</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             onPress={this.onRegister}
             style={styles.button2}>
             <Text style={{fontSize:24}}>Buy Now</Text>
            </TouchableOpacity>
        </View>
        
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
    textInput:{
      width:"90%",
      height:"8%",
      borderRadius:10,
      marginTop:50,
      borderWidth:1,
      borderColor:'#000000',
    },
    textInput1:{
      width:"90%",
      height:"8%",
      borderRadius:10,
      marginTop:11,
      borderWidth:1,
      borderColor:'#000000',
    },
    buttonContainer: {
      flexDirection:'row',
      alignSelf:'center',
      marginTop:25
          
    },
    button1:{
      width:'50%',
      height:'45%',
      padding:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#BCA9F5',
    },
    button2:{
      width:'50%',
      height:'45%',
      padding:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#642EFE',
    },
  }
    );
