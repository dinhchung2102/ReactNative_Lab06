import React, { useState } from "react";
import { Text, View, Pressable, Image, StyleSheet, TextInput, FlatList } from "react-native";
import { dataProduct2 } from "../data/dataProduct2";

export default function Screen2() {
    const [searchText, setSearchText] = useState('');
    const [numCol, setNumCol] = useState(2)
    const renderItem = ({item}) =>{
        return(
            <View style={styles.renderContainer}>
                <Image source={item.image} style ={styles.renderImage}/>
                <Text>{item.name}</Text>
                <View style={styles.rateView}>
                    <Image source={require('../assets/star-gold.png')}/>
                    <Image source={require('../assets/star-gold.png')}/>
                    <Image source={require('../assets/star-gold.png')}/>
                    <Image source={require('../assets/star-gold.png')}/>
                    <Image source={require('../assets/star-gold.png')}/>
                    <Text>(15)</Text>
                </View>
                <View style={styles.priceView}>
                    <Text>{item.price}đ</Text>
                    <Text>{item.discount * 100}%</Text>
                </View>
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate("Screen2");
          }}
        >
          <Image
            source={require("../assets/backLeft.png")}
            style={styles.icon}
          />
        </Pressable>

        <View style ={styles.searchView}>
            <Image source={require('../assets/search-icon.png')} />
            <TextInput value={searchText} onChangeText={setSearchText} placeholder="Tìm ở đây"/>
        </View>
        <Image source={require("../assets/cart.png")} style={styles.cartIcon}/>
        <Image source={require('../assets/more-icon.png')} styles ={styles.moreIcon}/>
      </View>
      <View style={styles.content}>
        <FlatList data={dataProduct2} renderItem={renderItem} keyExtractor={(item) => item.id}
            numColumns={numCol}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    /**
     * itemRender CSS
     */
    renderContainer:{
        marginRight: 60,
        marginBottom: '5%',
        width: '42%'

    },
    renderImage:{
        backgroundColor:'white',
        height: 130,
        width:170
    },
    rateView:{
        flexDirection:'row',
        alignItems:'center'
    },
    priceView:{
        flexDirection:'row'
    },
    /**
     * container CSS
     */
  container: {
    flex: 1,
    backgroundColor:'#C4C4C4',
    alignItems:'center'
  },
  /**
   * headerCSS
   */
  header:{
    flexDirection:'row',
    //justifyContent:'space-between',
    width:'100%',
    backgroundColor:'#1BA9FF',
    marginTop: 40,
    //justifyContent:'space-between',
    alignItems:'center',
    height: 55
  },
  icon:{
    marginLeft: 20,
    marginRight: 20
  },
  searchView:{
    width: '60%',
    flexDirection:"row",
    backgroundColor:'white',
    marginRight: 20
  },
  cartIcon:{
    marginRight: 20
  },
  moreIcon:{
    marginLeft: 200
  },
  /**
   * Content CSS: FlatList
   */
  content:{
    width:'90%',
    marginTop: 20
  },

});
