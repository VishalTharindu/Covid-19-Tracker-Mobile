import React from 'react';
import {StyleSheet, View} from "react-native";
// import AnimateNumber  from "react-native-countup";
import { Block, Button, Card, Icon, Input, NavBar, Text, theme } from 'galio-framework';
import Cards from './Cards';

export const DetailView = ({apidata:{confirmed, recovered, deaths, lastUpdate}}) => {
   console.log()

   if (!confirmed) {
        return (
            <View>
                <Text>Loading...................</Text>
            </View>
        )
   }
    return (
        
        <View>
            <Cards>
                <Block>
                    <Text style={styles.cardHeader}>Infected</Text>
                    <Text style={styles.dataValues}>{confirmed.value}</Text>
                </Block>
                <Text style={styles.updateDate}>{new Date(lastUpdate).toDateString()}</Text>
            </Cards>
            <Cards>
                <Block>
                    <Text style={styles.cardHeader}>Recovered</Text>
                    <Text style={styles.dataValues}>{recovered.value}</Text>
                </Block>
                <Text style={styles.updateDate}>{new Date(lastUpdate).toDateString()}</Text>
            </Cards>
            <Cards>
                <Block>
                    <Text style={styles.cardHeader}>Deaths</Text>
                    <Text style={styles.dataValues}>{deaths.value}</Text>
                </Block>
                <Text style={styles.updateDate}>{new Date(lastUpdate).toDateString()}</Text>
            </Cards>
        </View>
    )
}

const styles = StyleSheet.create({
    dataValues: {
        textAlign: "center",
        fontSize: 25,
        marginTop:10,
        color:"#fff"
    },
    cardHeader: {
        fontStyle:"italic",
        fontSize:30,
        textAlign:"center",
        color:"#fff"
    },
    updateDate: {
        fontSize: 15,
        marginTop:10,
        textAlign:"center",
        color:"#fff"
    }
    
})
