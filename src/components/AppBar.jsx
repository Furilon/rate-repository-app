import { Pressable, View, StyleSheet, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

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
            <ScrollView horizontal>
                <Pressable style={styles.button}>
                    <Link to="/">
                        <Text style={styles.header}>Repositories</Text>
                    </Link>
                </Pressable>
                <Pressable style={styles.button}>
                    <Link to="/signIn">
                        <Text style={styles.header}>Sign in</Text>
                    </Link>
                </Pressable>
            </ScrollView>
        </View>
    );
};

export default AppBar;