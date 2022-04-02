import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput  } from 'react-native';

export default function Success() {
    return (
        <View>
        <Text style={styles.heading}> Welcome to Service App </Text>
        <Text style={styles.paragraph}>
          Get closer to several services around.
        </Text>
        </View>
    );
}