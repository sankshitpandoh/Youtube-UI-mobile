import React, {Component} from 'react';
import {Text,TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends Component{
    render(){
        return(
            <View style={styles.videoContainer}>
            <Image source={{uri: 'http://via.placeholder.com/210x118'}} style={{height: 200}}/>
            <View style={styles.descriptionContainer}>
            <Image source={{uri: 'http://via.placeholder.com/210x118'}} style={{width:50, height:50, borderRadius: 25}}/>
             <View style={styles.videoDetails}>
               <Text style={styles.videoTitle}>TITLE OF THE VIDEO</Text>
               <Text style={styles.videoDes}>Channel Name . 420M views . 69 days ago</Text>  
             </View>
             <TouchableOpacity>
                 <Icon name='more-vert' size={20} />
             </TouchableOpacity>
            </View>
            <View style={styles.videoDivider} />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    videoContainer:{
       padding: 10, 
    },
    descriptionContainer:{
       paddingTop: 10, 
      flexDirection: 'row',  
    },
    videoTitle:{
        fontSize: 16,
        color: 'black'
    },
    videoDetails:{
      paddingHorizontal: 10  
    },
    videoDes:{
        paddingTop: 5
    },
    videoDivider:{
        height: 0.5,
        marginTop: 15,
        backgroundColor: 'black'
    }

})