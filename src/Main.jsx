import Constants from 'expo-constants';
import {StyleSheet, View} from 'react-native'
import {Route, Routes, Navigate} from "react-router-native"

import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import SignIn from './components/SignIn';

import theme from './theme';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 2,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.backgroundGray,
    }
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="/signIn" element={<SignIn />} exact />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            
        </View>
    )
}

export default Main;