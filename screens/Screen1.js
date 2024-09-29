import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { dataProduct } from '../data/dataProduct';
export default function Screen1({navigation}) {
    const renderItem = ({item}) =>{
        return(
            <View style ={styles.renderContainer}>
                <Image source={item.image} style={styles.renderImage}/>
                <View style={styles.renderInfo}>
                    <Text style={styles.renderNameText}>{item.name}</Text>
                    <View style ={{flexDirection:'row'}}>
                        <Text style ={{fontSize: 18}}>Shop: </Text>
                        <Text style ={{fontSize: 18, color:'red', fontWeight:'bold'}}>{item.shop}</Text>
                    </View>
                    
                </View>
                <Pressable style={styles.renderButton}>
                    <Text style={styles.renderButtonText}>Chat</Text>
                </Pressable>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <View style= {styles.header}>
            <Pressable onPress={() =>{navigation.navigate('Screen2')}}>
            <Image source={require('../assets/backLeft.png')} style={styles.icon}/>
            </Pressable>
            
            <Text style ={styles.headerText}>Chat</Text>
            <Image source={require('../assets/cart.png')} style={styles.icon}/>
        </View>
        <View style={styles.headerContent}>
            <Text style={styles.headerContentText}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
        </View>
        <View style={styles.content}>
            <FlatList
            data={dataProduct}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    renderContainer:{
        marginLeft: 15,
        flexDirection:'row',
        //alignItems:'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor:'grey'
    },
    renderImage:{
        width:100,
        height: 100,
        backgroundColor:'white',
        marginRight: 20
    },
    renderNameText:{
        fontSize: 20
    },
    renderInfo:{
        width: '50%'
    },
    renderButton:{
        backgroundColor:'red',
        height: 40,
        width: 80,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20
    },
    renderButtonText:{
        color:'white',
        fontSize: 18
    },
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
  },
  header:{
    backgroundColor:"#1BA9FF",
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop: 40,
    height: 50
  },
  icon:{
    marginLeft: 20,
    marginRight: 20
  },
  headerText:{
    fontSize: 25,
    color:'white'
  },
  headerContent:{
    marginTop: 20,
    borderBottomWidth:1,
    width: '100%'
  },
  headerContentText:{
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    paddingBottom: 10
  },
  content:{
    width:'100%',
    paddingTop: 20
  }
});
