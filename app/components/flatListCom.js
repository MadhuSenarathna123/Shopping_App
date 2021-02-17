import React, {Component} from 'react';
import {FlatList,StyleSheet,Text,View,TextInput,Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import furniture from '../configs/furniture';

const Home_Furniture = () => {
      return (
        <View style={styles.header}>
            <View style={styles.searchContainer}>
              <Icon name="search" size={20} style={{marginLeft:20}}/>
              <TextInput placeholder="Search"/>
            </View>
            <View style={styles.sortBtn}>
              <Icon name="sort" size={30}/>
            </View>
          </View>
      );
    } 

class FlatListItem extends Component {
    render(){
        return(  
            <View style={{
                flex:1,
                backgroundColor: this.props.index %2 ==0 ? 'mediumseagreen' : 'tomato' }}>

                <Image source={this.props.item.img}
                style={{width:100, height:100, margin:5}}>

                </Image>
                <View>
                     <Text style={styles.flatListCom}>{this.props.item.name}</Text>
                     <Text style={styles.flatListCom}>{this.props.item.price}</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    header: {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      searchContainer:{
        height:40,
        backgroundColor:"#BCA9F5",
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
      },
     sortBtn:{
        marginLeft:2,
        height:40,
        width:40,
        backgroundColor:"#642EFE",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
     }, 
    flatListCom:{
        color:"white",
        padding:5,
        fontSize:10,
    }
})

export default class flatListCom extends Component {
    render(){
        return(
            <View style={{flex:1, marginTop:22, alignItem:'center'}}>
             <FlatList data={furniture}
                renderItem={({item, index})=>{
                    // console.log(`item = ${JSON.stringify(item)},index=${index}`);
                    return (
                    <FlatListItem 
                    item={item} 
                    index={index}> 
                    </FlatListItem>);
                }}/>
            </View>
        )
    }
}
