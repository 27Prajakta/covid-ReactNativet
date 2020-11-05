import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class LandingScreen extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <Text>LandingScreen</Text>
                <Button
                title={"Click"} 
                onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}