import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './Counter'
import { Provider } from 'react-redux'
import store from '../redux/Store'

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Provider store={store} >
                <Counter />
            </Provider>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})