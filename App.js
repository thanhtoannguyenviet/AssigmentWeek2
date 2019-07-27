import React,{Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView} from 'react-native';
import { AntDesign,SimpleLineIcons,Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData=[
  {id:1,imgSource:require('./assets/1.jpeg')},
  {id:2,imgSource:require('./assets/2.jpeg')},
  {id:3,imgSource:require('./assets/2.jpeg')},
  {id:4,imgSource:require('./assets/1.jpeg')},
  {id:1,imgSource:require('./assets/1.jpeg')},
  {id:2,imgSource:require('./assets/2.jpeg')},
  {id:1,imgSource:require('./assets/2.jpeg')},
  {id:2,imgSource:require('./assets/1.jpeg')},];
const centerImgData=Math.floor(imgData.length/2);
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={25} color="gray" />
        <AntDesign name="appstore1" size={25} color="gray"/>
      </View> 
      <View style={styles.info}> 
        <Image source={require('./assets/avatar.jpg')} style={styles.Avatar}/>
        <View style={styles.profile}>
          <Text style={[styles.txt,styles.txtMain]}>Nguyễn Viết Thanh Toàn</Text>
          <Text style={[styles.txt,styles.txtSub]}>@shio1440</Text>
          <View style={styles.btnGroup}>
            <TouchableOpacity style={styles.btnfollow} onPress={()=>alert('Followed')}> 
              <Text style={[styles.txt,{color:"white"}]}>Folow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSendMess}> 
              <MaterialCommunityIcons name="send" size={20} color="white"/>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countGroup}>
        <View>
         <Text style={[styles.txt,styles.txtMain]}>3</Text>
          <Text style={[styles.txt,styles.txtSub]}>Post</Text>
        </View>
        <View>
          <Text style={[styles.txt,styles.txtMain]}>25</Text>
          <Text style={[styles.txt,styles.txtSub]}>Follows</Text>
        </View>
        <View>
          <Text style={[styles.txt,styles.txtMain]}>21</Text>
          <Text style={[styles.txt,styles.txtSub]}>Following</Text>
        </View>
      </View>
      <View style={styles.imageGroup} >
      
        <ScrollView contentContainerStyle={{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
        }}>
        <View > 
          {imgData.slice(0,centerImgData).map(item=>{
            return <Image source={item.imgSource} style={styles.image} />;
          })} 
        </View>
        <View >
          {imgData.slice(centerImgData).map(item=>{
            return <Image source={item.imgSource} style={styles.image} />;
          })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.countGroup}>
      <MaterialCommunityIcons name="checkbox-multiple-blank-outline" size={25} color="gray" />
          <Ionicons name="md-add-circle-outline" size={25} color="gray" />
          <SimpleLineIcons name="user" size={25} color="gray" />
      </View>
      </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  header:{
    flex:0.1,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  info:{
    flex:0.2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  countGroup:{
    flex:  0.1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  Avatar:{
    width:120,
    height:120,
    borderRadius:60,
  },
  profile:{
    alignItems:'center',
    padding:'auto',
    textAlign:'center',
  },
  btnGroup:{
    flexDirection:'row'
  },
  btnfollow:{
    justifyContent:'space-around',
    backgroundColor:FOLLOW_COLOR,
    borderRadius:15,
    width:100,
    alignItems:'center',
    marginRight:10,
  },
  btnSendMess:{
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius:15,
    padding: 10,
    width:50,
    alignItems:'center'
  },
  txt:{
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
    padding:2
  },
  txtMain:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  txtSub:{
    color:'gray',
    fontSize:15,
    paddingBottom:10
  },
  imageGroup:{
     flex:0.5
  },
  image:{
    height:160,
    width:160,
  }
  
});
