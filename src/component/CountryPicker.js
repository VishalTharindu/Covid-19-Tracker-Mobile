import React, {useState, useEffect} from "react"
import {View, Picker, StyleSheet} from "react-native"
import {fetchCountries} from "./../Api/"

export  const CountryPicker = ({handleCountryChange}) =>{

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() =>{
        const fetchCointryApi = async () =>{
            setFetchedCountries(await fetchCountries())
        }
        fetchCointryApi()
    }, [setFetchedCountries])

    return(
        <View style={styles.container}>
        <Picker
            fetchedCountries= {fetchedCountries}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => handleCountryChange(itemValue)}
        >
        <Picker.Item style={styles.picker} label="Global" value="" />
        {fetchedCountries.map((country,i) => <Picker.Item key={i} label={country} value={country} />)}
      </Picker>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      alignItems: "center"
    },
    picker: {
        borderBottomWidth:2,
        borderBottomColor: "#000",
        height: 50,
        width: 150,
        color:"#fff",
        fontSize:30
    }
  });
