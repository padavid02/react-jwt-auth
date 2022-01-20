import React, { Component } from 'react';
import {StyleSheet, Text,View, FlatList, Image, TouchableOpacity } from 'react-native';

export default class Nissan extends Component {



  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource:[]
    }
  }
componentDidMount(){ 
  

    return fetch('http://localhost:8080/mindenadatsupra')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function(){

        });
//alert(JSON.stringify(this.state.dataSource))
      })
      .catch((error) =>{
        console.error(error);
      });  

  }


rendeles=()=>{

alert("rendelését sikeresen feladta a(z) {0} autóra")

}


  render() {
    return (
      <View >
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={styles.container} >
          <Text style={{color:"#dce39f",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5, borderWidth:1, borderColor: "#dce39f" }}   >Típus neve: {item.tipus_nev} </Text>
          <Image  source={{uri: 'http://localhost:8080/'+item.tipus_kep}} style={{width:350,height:350,marginLeft:"auto",marginRight:"auto"}} />  
          <Text style={{color:"#dce39f",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Évjárat: {item.tipus_evjarat}</Text>
            
            <Text style={{color:"#dce39f",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Ajtók száma: {item.tipus_ajtokszama} </Text>
            <Text style={{color:"#dce39f",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Motor: {item.tipus_motor}</Text>
            <Text style={{color:"#dce39f",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Kilóméterállás: { item.tipus_km }</Text>
            <Text style={{color:"#dce39f",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Gumiméret: {item.tipus_gumimeret} </Text>
            <Text style={{color:"#dce39f",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Állapot: {item.tipus_allapot} </Text>

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.rendeles(item.tipus_id)}
      >


        
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Rendelés feladása</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({tipus_id}, index) => tipus_id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "#02f5f5",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  },


  container:{
      flex:1,
      padding:5,
      borderWidth :3,
      borderColor: "#00FFFF",
      borderRadius: 15,
      backgroundColor: "black"

  }
});