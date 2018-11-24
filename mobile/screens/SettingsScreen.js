import React from 'react';
import {
  Image,
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Picker,
  View,
  ListView
} from 'react-native';


import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import UTable  from '../components/UTable';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  constructor() {
    super()

      this.state = {
        tech: 'select',
        list: ['select'],
        create: "new",
        db: "none",
        show: false
    }
      this.selectLoad = this.selectLoad.bind(this);
      this.deleteClick = this.deleteClick.bind(this);
      this.selectLoad();
 };

 componentDidMount(){
  // Alert.alert("HH")
//    Alert.alert(String(this.state.list))

 }

 selectLoad() {
  fetch('http://10.1.0.234:8000/laba_inf_tex/api/v1.0/get_DBs')
      .then(response => {return response.json()})
      .then(data => this.setState({list : data["DB"]}))
      .then(() => this.setState({
        tech: this.state.list[0]
      }))

    }

  selectClick(e){

    this.setState({
      tech: e.target.value
    })
  }

  importClick(e) {
    this.setState({tech: e})
    fetch("http://10.1.0.234:8000/laba_inf_tex/api/v1.0/import_DB/" + this.state.tech)
    .then(response => {return response.json()})
      .then((data) => {
     
        this.setState({
        db: data,

     })}
     )

  }

  deleteClick() {
   
     fetch("http://10.1.0.234:8000/laba_inf_tex/api/v1.0/delete_DB/" + this.state.tech,{
      method:'delete'
    })
    .then(()=> this.selectLoad())
  }

  renderTD(table){
    var a = [];
    for (var item in table){
      a.push(
      <UTable key={item}
            db= {this.state.db}
            table = {item}
            path = {this.state.db.tables[item]}
      >

      </UTable>);
    }
    return a

  }

  render() {

   const state = this.state;
    return(

    <View>


      <Picker
        selectedValue={this.state.tech}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.importClick.call(this,itemValue)}>
        {this.state.list.map((item) => (
          <Picker.Item label={item} value={item} key={item}/>
        ))}
      </Picker>
 

    <View style={styles.buttonContainer}>
        <Button
          onPress={this.deleteClick}
          title={"Delete"}
        />
    </View>
  

   
   {this.state.db.tables &&  this.renderTD.call(this,this.state.db.tables)}
    {/* <View style={[styles.tableContainer]}>
      {/* <UTable>
        
      </UTable>
       </View> */}
   
       
    
 
  </View>
    )
  }
}

const styles = StyleSheet.create({
    tableContainer: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',height:300 },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#eee' },

});
