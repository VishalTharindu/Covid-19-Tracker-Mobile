import React from 'react';
import {View, StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
// import { Block, Button, Card, Icon, Input, NavBar, Text, theme } from 'galio-framework';

export default function Cards(props){

    return(
        <View style={styles.card}>
            <LinearGradient
                colors={['#111214','#4F5345']}
                style={styles.test}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.cardContain}>
                    {props.children}
                </View>            
            </LinearGradient>
            {/* <View style={styles.cardFooter}></View> */}
            <LinearGradient
                colors={['#47288E','#71BB66', '#D32A1A']}
                style={styles.grLine}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            ></LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 4,
        backgroundColor: '#FFFFFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor:'#333',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContain:{
        marginHorizontal: 18,
        marginVertical: 10,
        textAlign: "center",
        
    },
    cardFooter: {
        height:10,
        width:"100%",
        backgroundColor:"#2a06d6",
        borderBottomEndRadius:6,
        borderBottomStartRadius:6
    },
    grLine: {
        height:15,
        borderBottomEndRadius:6,
        borderBottomStartRadius:6
    }
})