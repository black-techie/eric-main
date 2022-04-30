import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Welcome from "./screens/welcome";
import Login from "./screens/login";
import SignUp from "./screens/signup";
import Congrats from "./screens/congrats";
import Home from "./screens/home";
import History from "./screens/history";
import Success from "./screens/success";
import Profile from "./screens/profile";
import Message from "./screens/message";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="history" component={History} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="message" component={Message} />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
