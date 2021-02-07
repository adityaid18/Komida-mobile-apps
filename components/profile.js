import React, { useState } from 'react';
import {  SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export const profile = () => {
    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})