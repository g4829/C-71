import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Alert, Touchable } from 'react-native';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends Component{
    constructor(){
        super();
        this.state={
            titleOfTheStory: '',
            authorOfTheStory: '',
            writeTheStory: ''
        }
    }

    render(){
        return(
    <Header
    centerComponent={{text: 'StoryHub',style: {color: '#ff5633'}}}
    />
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.buttonContainer}>
                    <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold',marginLeft:55}}>TITLE OF THE STORY</Text>
                    <TextInput style={styles.input}
                    keyboardType="default"
                    onChangeText={(text)=>{
                        this.setState({
                            titleOfTheStory: text
                        })
                    }}/>
                    </View>

                    <View style={styles.buttonContainer}>
                    <Text style={{color:'#ff5732', fontSize:18, fontWeight:'bold',marginLeft:55}}>AUTHOR OF THE STORY</Text>
                    <TextInput style={styles.input}
                    keyboardType="default"
                    onChangeText={(text)=>{
                        this.setState({
                            authorOfTheStory: text
                        })
                    }}/>
                    </View>

                    <View style={styles.buttonContainer}>
                    <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold',marginLeft:55}}>WRITE THR STORY</Text>
                    <TextInput style={styles.input}
                    keyboardType="default"
                    onChangeText={(text)=>{
                        this.setState({
                            writeTheStory: text
                        })
                    }}/>
                    </View>
                    
                    <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.text(this.state.titleOfTheStory,this.state.authorOfTheStory,this.writeTheStory)}}
              >
              <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>SUBMIT</Text>
            </TouchableOpacity>
                </View>
            </View>

        );
    }

    render(){
        return(
            submitStory=(titleOfTheStory,authorOfTheStory,writeTheStory)=>{
                db.collection('users').add({
                    author_of_the_story: this.state.Author,
                    title_of_the_story: this.state.Title,
                    write_the_story: this.state.Story
                })
            }
        )
    }

    render(){
        return(
            <TouchableOpacity style={styles.submitButton}
                onPress={this.submitStory}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });