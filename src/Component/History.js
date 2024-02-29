import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function History({navigation}){
   
  const users = [
    {
      id: 1,
      user: 'John Doe',
      last_read_chapter: 5,
      messages: 'hahahahahaha',
      img:require('../assets/luanhoithuongde_dot2.jpg'),
    },
    {
      id: 2,
      user: 'Jane Smith',
      last_read_chapter: 8,
      messages: 'hahahahahahasasaaaaaaaaaaaaaaaaaaahahahahahahasasaaaaaaaaaaaaaaaaaaahahahahahahasasaaaaaaaaaaaaaaaaaaahahahahahahasasaaaaaaaaaaaaaaaaaaahahahahahahasasaaaaaaaaaaaaaaaaaaa',
      img:require('../assets/nguthuchivuong.jpg'),
    },
    // Thêm thông tin người dùng khác nếu cần
  ];
    // const [user, setUser] = useState({});
  //   useEffect(() => {  
  //       fetchData();
        
  //     }, []);
  //   const fetchData = async () => {
  //   try {
  //     const userSignin = await AsyncStorage.getItem('email');
  //     if (userSignin) {
  //       const response = await fetch('http://localhost:3000/User');
  //       const db = await response.json();
  //       const userfind = db.find((userfind) => userfind.email === userSignin);
  //       if (userfind) {
  //         setUser(userfind);
  //       } else {
  //         alert('Error', 'User not found in the database');
  //       }
        
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     alert('Error', 'An error occurred while fetching data');
  //   }
  // };
 
    return (
        <View  style={styles.container}>
        <View  style={styles.header}>
        <View style={{ flexDirection: 'row',
        alignItems: 'center',}}>
          <Text style={styles.tittle}>Lịch sử</Text>
        </View>
            {/* <TouchableOpacity style={styles.theLoai}>
                <SimpleLineIcons name="setting" size={30} color="white"/>
            </TouchableOpacity> */}

        </View>
        <ScrollView style={{backgroundColor:'gray',width:'100%'}}>
            <FlatList
            style= {styles.items}
                data={users}
                renderItem={({item})=> (
                  <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Chat',{chapter:item.last_read_chapter,item:item})}>
                  <Image source={item.img} style={styles.image} />
                  <View style={{width:180}}>
                    <Text style={styles.name} numberOfLines ={1}>
                      {item.user}
                    </Text>
                  <Text style={styles.name} numberOfLines ={1}>
                     {item.messages}
                  </Text>
                  </View>
                  <View>
                    <Text style={styles.time}>Time</Text>
                    <Text style={styles.noti}>?</Text>
                  </View>
                </TouchableOpacity>
                )}
                
                numColumns={1}
                
            />
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    tittle:{
        fontSize:20,
        color:'white',
    },
    items:{
      
      marginTop:5,
      width:"100%",
      borderRadius:10,
      shadowOffset:{
        width:0,
        height:3,
      },
      shadowOpacity:0.6,
      shadowRadius:9.4/2,
      elevation:11,
      overflow:"hidden"
    },
    item:{
        height:70,
        width:'100%',
        flexDirection:'row',
        padding:15
    },
    theLoai:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        borderRadius:'50%',
        width:50,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        flex:'column'
    } ,
    name:{
        marginLeft:10,
        height:50,
        color:'white',
        width:150,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        height:'10%',
        width:'100%'
      },
      time:{
        color:'black',
        fontSize:12,

      },
      noti:{
        textAlign:'center',
        fontSize:10,
        color:'white',
        borderWidth:1,
        backgroundColor:'black',
        borderRadius:10,
        marginTop:5,
      },
})
