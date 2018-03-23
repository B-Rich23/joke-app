import React from 'react';

// CSS, text, container, something to type text in, button emulator
import { StyleSheet, Text, View, TextInput, TouchableHightlight } from 'react-native';

// extending the parent class from React.Component to the child class Input
export default class Input extends React.Component {

    render() {
        // return data, i.e. result of executing function

        // instance is one instance/child of class with specific attributes called props/properties
        return (
            <View style={styles.container}>
                <TextInput
                    keyboardType={'numeric'}
                    value={this.props.value}
                    style={style.input}
                    // track changes in text when someone types something in input field
                    onChangeText={(text) => this.props.onChange(text)}

                />

            </View>


        );
    }
}

// optimize styling
// flex 1 takes up entire height of the screen
// alignItems horizontally aligns
// justifyContents vertically aligns
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
    }
})