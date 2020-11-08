import React, { Component } from 'react';
import { View, Image } from 'react-native';

export class LandingScreen extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        }, 1000)
    }

    render() {
        return (
            <View style={{backgroundColor:'#fff', flex:1}}>
                <Image 
                  style={{height:50, width:'60%', alignSelf:'center', marginTop:'50%'}}
                  source={require('../images/image.png')}
                />
            </View>
        )
    }
}