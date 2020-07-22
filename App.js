import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {DetailView} from './src/component/DetailView';
import {CountryPicker} from './src/component/CountryPicker'
import {Header} from './src/component/header'
import {fetchData} from './src/Api';

class App extends Component {

  constructor(){

    super()
    this.state = {
      data : {},
      country: ''
    }
  }

  async componentDidMount(){

    const fetchedData = await fetchData()

    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData, country:country})
    console.log(fetchedData)
  }

  render() {
    const {data, country} = this.state
    const image = { uri: "./assets/covid.png" };
    return(
      <View>
        <LinearGradient    
        colors={['#8C7270', '#000000', '#FFFFFF']}
        style={styles.outcontainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
          >
            {/* <Header /> */}
            {/* <ImageBackground style={styles.image} source={image}> */}

              <View style={styles.container}>
                  <Text style={styles.headerText}>Covid 19 Tracker</Text>
                  <Text style={styles.countryText}>{country}</Text>
                  <DetailView apidata={data} />
                  <CountryPicker handleCountryChange={this.handleCountryChange} />
              </View>
            {/* </ImageBackground> */}
            <StatusBar style="auto" />
          </LinearGradient>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({

  container : {
    marginTop : 20,
    padding:20 
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  outcontainer: {
    height:800
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    textAlign:"center",
    fontSize:35,
    fontWeight:"bold",
    color:"#fff",
    marginBottom:15
  },
  countryText:{
    textAlign:"center",
    color:"#fff",
    fontSize:25,
    marginBottom:10
  }
})

