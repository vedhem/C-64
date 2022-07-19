import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Header} from "react-native-elements";
import dictionary from './database'

function getWord(word) {
  var searchKeyword = word.toLowerCase();
  var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword+".json";
  return fetch(url)
  .then((data)=>{
    if (data.status===200) {
      return data.json()
    }
    else {
      return null
    }
  })
  .then((response)=>{
    var responseObject = response
    if (responseObject) {
      var wordData = dictionary[text]['word']
      var definition = dictionary [text]['definition']
      var lexicalCategory = [text]['lexicalCategory']
      this.setState({
        'word':wordData,
        'definition': definition,
        'lexicalCategory': lexicalCategory
      })
    }
    else {
      this.setState({
        'word': this.state.text,
        'definition': 'Not Found :('
      })
    }
  })
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.buttonText}>
      Word: {''}
      </Text>
      <Text style={{fontSize:18}}>
      {this.state.lexicalCategory}
      </Text>
      </View>
      <View style={styles.container}>
      <Text style={styles.buttonText}>
      Type: {''}
      </Text>
      <Text style={{fontSize:18}}>
      {this.state.lexicalCategory}
      </Text>
      </View>
      <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
      <Text style={styles.buttonText}>
      Definition: {''}
      </Text>
      <Text style={{fontSize: 18}}>
      {this.state.definition}
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#FAD0C9',
  },
  inputBox: {
    marginTop: 200,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputBoxContainer: {
    flex: 0.3,
    alignItems: 'center',
    height: 40
  }
});