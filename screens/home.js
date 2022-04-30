import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.contaniner}>
        <View style={styles.main}>
          {/* main content will go here */}

          {/* main content will go here */}
        </View>
        <View style={styles.nav}>
          <TouchableOpacity>
            <Icon
              style={{}}
              size={32}
              name="home"
              type="feather"
              color={"red"}
            />
          </TouchableOpacity>
          <TouchableOpacity
             onPress={() => navigation.navigate('history')}
          >
            <Icon
              style={{}}
              size={28}
              name="clock"
              type="feather"
              color={"black"}
            />
          </TouchableOpacity>
          <TouchableOpacity
               onPress={() => navigation.navigate('message')}
          >
            <Icon
              style={{}}
              size={28}
              name="message-circle"
              type="feather"
              color={"black"}
            />
          </TouchableOpacity>
          <TouchableOpacity
             onPress={() => navigation.navigate('profile')}
          >
            <Icon
              style={{}}
              size={28}
              name="user"
              type="feather"
              color={"black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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