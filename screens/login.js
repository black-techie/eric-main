
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput  } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function Login( {navigation} ) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Login  </Text>
        <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />

        <Button title="Login" buttonStyle={styles.loginButton} onPress={() => navigation.navigate('SignUp')}  />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}> <Text>Don't Have an account? Sign Up</Text></Text>
      </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    padding: 30,
    textAlign: "center",
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center"
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
});