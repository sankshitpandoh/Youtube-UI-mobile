
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoitem'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.youTube}>YOUTUBE</Text>
         <View style={styles.rightNav}>
           <TouchableOpacity>
           <Icon style={styles.navItem}name ='search' size={30}></Icon>
           </TouchableOpacity>
           <TouchableOpacity>
           <Icon style={styles.navItem}name = 'account-circle' size={30}></Icon>
           </TouchableOpacity>
           </View> 
        </View>
              <View style={styles.body}>
              <ScrollView>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
              </ScrollView>
              </View>
              <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                <Icon name='home' size={30}></Icon>
                <Text style={styles.tabText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                <Icon name='whatshot' size={30}></Icon>
                <Text style={styles.tabText}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                <Icon name='subscriptions' size={30}></Icon>
                <Text style={styles.tabText}>Subscriptions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                <Icon name='inbox' size={30}></Icon>
                <Text style={styles.tabText}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                <Icon name='folder' size={30}></Icon>
                <Text style={styles.tabText}>Library</Text>
                </TouchableOpacity>
              </View>
              </View>
              
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar:{
    height: 55,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  youTube: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
  },
  rightNav:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  navItem:{
    marginLeft: 20,
  },
  body:{
    flex:1
  },
  tabBar:{
    backgroundColor:'white',
    borderTopWidth: 0.5,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabText:{
    fontSize: 10,
    fontWeight: 'bold'
    
  },
  tabItem:{
    alignItems:'center',
    justifyContent: 'center'
  },


});
