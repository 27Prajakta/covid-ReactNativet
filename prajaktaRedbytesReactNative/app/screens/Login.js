import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Input } from 'react-native-elements';

export class Login extends Component {

    state ={
        username:'',
        password:''
    }

    render() {
        let { username, password} = this.state;
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <Image
                    style={{ height: 50, width: '60%', alignSelf: 'center', marginTop:'10%' }}
                    source={require('../images/image.png')}
                />
                <View style={{marginTop:'10%'}}>
                    <Input
                        placeholder='Username'
                        onChangeText={value => this.setState({ username: value })}
                    />

                    <Input
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={value => this.setState({ password: value })}
                    />
                </View>

                <TouchableOpacity
                  style={{
                      justifyContent:'center',
                      alignItems:'center',
                      width:'95%',
                      height:50,
                      marginLeft:'2%',
                      marginRight:'2%',
                      borderRadius:30,
                      backgroundColor: username && password ? '#12c9c9' : '#74a3a3'
                  }}
                  disabled={!username && !password}
                  onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>Log in</Text>
                </TouchableOpacity>

            </View>
        )
    }
}