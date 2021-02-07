import React, {Component} from 'react';
import {FlatList,StyleSheet,Text,View,TextInput,Image,Card} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import furniture from '../configs/furniture';
 

class FlatListItem extends Component {
    onCard = () => {};
    render(){
        return(  
            <View style={styles.cardContainer}>
            <View style={{
                flex:1,
                width:"90%",
                height:220,
                borderRadius:10,
                margin:10,
                backgroundColor:"#ECE0F8"}}>

                <Image source={this.props.item.img}
                style={{width:150, height:150, margin:5, borderRadius:10}}>

                </Image>
                <View>
                     <Text style={styles.flatListCom}>{this.props.item.name}</Text>
                     <Text style={styles.flatListCom1}>{this.props.item.price}</Text>
                </View>
                </View>
                 
            <View style={{
                flex:1,
                width:"90%",
                height:220,
                borderRadius:10,
                margin:10,
                backgroundColor: "#ECE0F8" }}>

                <Image source={this.props.item.img}
                style={{width:150, height:150, margin:5, borderRadius:10}}>

                </Image>
                <View>
                     <Text style={styles.flatListCom}>{this.props.item.name}</Text>
                     <Text style={styles.flatListCom1}>{this.props.item.price}</Text>
                </View>
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
        flexDirection:'row',
        alignItems:'center',
     }, 
    flatListCom:{
        color:"#000000",
        padding:5,
        fontSize:20,
        marginBottom:-10
    },
    flatListCom1:{
        color:"#DF0101",
        padding:5,
        fontSize:17,
    },
   cardContainer: {
        flexDirection:'row',
        alignSelf:'center',},
})

export default class flatListCom extends Component {
    render(){
        return(
            <View style={{flex:1, marginTop:"2%", }}>
            <View style={styles.searchContainer}>
              <Icon name="search" size={20} style={{marginLeft:20}}/>
              <TextInput placeholder="Search"/>
            </View>
            <View>
             <FlatList data={furniture}
                renderItem={({item, index})=>{
                    // console.log(`item = ${JSON.stringify(item)},index=${index}`);
                    return (
                    <FlatListItem 
                    item={item} 
                    index={index}> 
                    <Card>

                    </Card>
                    </FlatListItem>);
                }}/>
            </View>
            </View>
        )
    }
}
