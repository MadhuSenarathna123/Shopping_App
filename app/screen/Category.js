import React,{Component} from 'react';
import {View, Text,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
import Images from '../configs/Images';
import MyComponent from '../components/MyComponent';

export default class Home extends Component {
  onHomef = () => {console.log('a');};
  onOffice = () => {console.log('b');};
  onChildren = () => {console.log('c');};
  onOutdoor = () => {console.log('d');};
  onCommercial = () => {console.log('e');};
  onCafe = () => {console.log('f');};
  onBar = () => {console.log('g');};
 
  render() {
    return (
      <View> 
      <ImageBackground source={Images.categoryback} style={styles.cImage}/>
  
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          onPress={this.onHomef}
          style={styles.button1}>
           <MyComponent category="Home"/>
           <MyComponent category="Furniture"/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onOffice}
          style={styles.button1}>
           <MyComponent category="Office"/>
           <MyComponent category="Furniture"/>
          </TouchableOpacity>
        </View>
      </View> 

      <View>
        <View style={styles.buttonContainer}>

         <TouchableOpacity 
          onPress={this.onChildren}
          style={styles.button1}>
           <MyComponent category="Children"/>
           <MyComponent category="Furniture"/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onOutdoor}
          style={styles.button1}>
           <MyComponent category="Outdoor"/>
           <MyComponent category="Furniture"/>
          </TouchableOpacity>
        </View>
        <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          onPress={this.onCommercial}
          style={styles.button1}>
           <MyComponent category="Commercial"/>
           <MyComponent category="Furniture"/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={this.onCafe}
          style={styles.button1}>
           <MyComponent category="Cafe"/>
           <MyComponent category="Furniture"/>
          </TouchableOpacity>
        </View>
      </View> 

      <View>
        <View style={styles.buttonContainer}>

         <TouchableOpacity 
          onPress={this.onBar}
          style={styles.button1}>
           <MyComponent category="Bar"/>
           <MyComponent category="Furniture"/>
          </TouchableOpacity>

        </View>
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
  cImage:{
    width: 400,
    height:675,
    flex:1,
  },
  buttonContainer: {
    flexDirection:'row',
    alignSelf:'center',
      
  },
  button1:{
      width:150,
      height:100,
      padding:10,
      margin:10,
      marginTop:15,
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