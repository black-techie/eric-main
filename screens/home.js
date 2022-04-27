import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    // <Tab.Navigator
    //   initialRouteName="Feed"
    //   screenOptions={{
    //     tabBarActiveTintColor: '#e91e63',
    //   }}
    // >
    //   <Tab.Screen
    //     name="Feed"
    //     component={Feed}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Notifications"
    //     component={Notifications}
    //     options={{
    //       tabBarLabel: 'Updates',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="bell" color={color} size={size} />
    //       ),
    //       tabBarBadge: 3,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={Profile}
    //     options={{
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
    // <View>
    //   <Text>Home</Text>
    //   <Icon
    //           style={{}}
    //           size={27.5}
    //           name="user"
    //           type="feather"
    //         />
    // </View>
    <View style={styles.contaniner}>
      <View style={styles.main}></View>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Icon
            style={{}}
            size={30}
            name="home"
            type="foundation"
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={{}}
            size={30}
            name="search"
            type="feather"
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={{}}
            size={30}
            name="heart"
            type="feather"
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            style={{}}
            size={30}
            name="user"
            type="feather"
            color={"black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaniner: {
    backgroundColor: "#383838",
    height: "100%",
    width: "100%",
  },
  main: {
    backgroundColor: "#484848",
    height: "90%",
    width: "100%",
  },
  nav: {
    backgroundColor: "white",
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
