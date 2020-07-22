import React from 'react';
import {View, StyleSheet} from "react-native";
import { Block, Button, Card, Icon, Input, NavBar, Text, theme } from 'galio-framework';


export const Header = () => {
    return(
        <View style={styles.conatiner}>
            <NavBar style={styles.conatiner} title="Covid 19 Tracker" titleStyle="fontSize:20">
                <Text>Covid 19 Tracker</Text>
            </NavBar>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        // backgroundColor: theme.COLORS.WARNING,
        fontSize:30
    },
    headerContent: {

    }
})