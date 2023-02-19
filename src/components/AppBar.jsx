import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#24292e",
    paddingHorizontal: 15
  },
  button: {
    marginRight: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 15,
  }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.header}>Repositories</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.header}>Sign in</Text>
            </Pressable>
        </View>
    );
};

export default AppBar;