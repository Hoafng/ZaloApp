import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

export default function History({navigation}){
   
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const users = [
    {
      id: 1,
      user: 'John Doe',
      messages: 'hahahahahaha',
      img:require('../assets/luanhoithuongde_dot2.jpg'),
    },
    {
      id: 2,
      user: 'Jane Smith',
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
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/User?phone=${searchQuery}`);
      const db = await response.json();
      setSearchResults(db);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error', 'An error occurred while fetching data');
    }
  };
    return (
        <View  style={styles.container}>
        <View  style={styles.header}>
        <TouchableOpacity style={styles.theLoai} onPress={handleSearch}>
            <SimpleLineIcons name="magnifier" size={20} color="white" />
          </TouchableOpacity>   
          <TextInput
            style={{ height: 40, borderColor: 'blue', borderWidth:'0', paddingHorizontal: 10, width: '70%',color: 'white' }}
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
            placeholder="Tìm kiếm"
          />
          <TouchableOpacity style={styles.theLoai} onPress={handleSearch}>
            <MaterialCommunityIcons name="qrcode-scan" size={20} color="white" />
          </TouchableOpacity>   
          <TouchableOpacity style={styles.theLoai} onPress={handleSearch}>
            <AntDesign name="plus" size={20} color="white" />
          </TouchableOpacity>   
                
        </View>
        <ScrollView style={{backgroundColor:'white',width:'100%'}}>
            <FlatList
            style= {styles.items}
                data={users}
                renderItem={({item})=> (
                  <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('ChatScreen',{users:item})}>
                  <Image source={item.img} style={styles.image} />
                  <View style={{width:'70%'}}>
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
        backgroundColor: 'white',
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
     
     
      overflow:"hidden",
      borderWidth:0,
    }, 
    item:{
        height:70,
        width:'100%',
        flexDirection:'row',
        padding:15,
        
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
        color:'black',
        width:150,
    },
    header:{
      backgroundColor:'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        height:'8%',
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
