import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    direction: "row",
    alignItems: "flex-start",
    backgroundColor: "#24292e",
    paddingHorizontal: 15
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
            <Pressable>
                <Text style={styles.header}>Repositories</Text>
            </Pressable>
        </View>
    );
};

export default AppBar;