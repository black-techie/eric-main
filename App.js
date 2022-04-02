import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/welcome";
import Login from "./screens/login";
import SignUp from "./screens/signup";
import Congrats from "./screens/congrats";
import MyTabs from "./screens/home";
import Success from "./screens/success";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

