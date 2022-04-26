
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput  } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function SignUp() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Create an Account </Text>
        <TextInput placeholder="Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
        <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
        <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
        <TextInput placeholder="Phone Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
        <TextInput placeholder=" Confirm Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />

        <TouchableOpacity
          style={styles.buttonOutline}
        >
          <Text style={styles.buttonTextOutline}>Sign Up</Text>
        </TouchableOpacity>

        <Text>Already have an account?</Text><TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('login')}>
          <Text style={styles.navButtonText}>Sign In</Text>
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
  signup: {
    padding: 5,
    fontSize: 20, 
    color: '#fff',
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
    width: 300,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 500,
    alignItems: "center"
  },
  navButtonText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  buttonOutline: {
    marginTop: 50,
    height: 50,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "#EA5C2B",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#EA5C2B",
  },
  buttonTextOutline: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});